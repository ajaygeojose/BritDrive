import { useEffect, useState } from "react";

const QuizProgressBar = ({ completed, total = 600 }:{completed:number, total:number}) => {
  const [displayedPercent, setDisplayedPercent] = useState(0);
  const percentage = Math.min((completed / total) * 100, 100);

  // Smooth width animation
  useEffect(() => {
    const animation = requestAnimationFrame(() => {
      setDisplayedPercent((prev) => {
        const diff = percentage - prev;
        if (Math.abs(diff) < 0.5) return percentage;
        return prev + diff * 0.1;
      });
    });
    return () => cancelAnimationFrame(animation);
  }, [percentage, displayedPercent]);

  // Color transitions
  const getColor = (pct:number) => {
    if (pct < 20) return "from-red-500 via-orange-500 to-yellow-400";
    if (pct < 40) return "from-orange-500 via-yellow-400 to-blue-400";
    if (pct < 60) return "from-yellow-400 via-blue-400 to-indigo-500";
    if (pct < 80) return "from-blue-400 via-indigo-500 to-purple-500";
    return "from-indigo-500 via-purple-500 to-pink-500";
  };

  const colorGradient = getColor(displayedPercent);

  // Add pulse glow when >80%
  const glowClass =
    displayedPercent > 80 ? "animate-glow shadow-[0_0_20px_4px_rgba(147,51,234,0.6)]" : "";

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
        <span>Progress</span>
        <span>{Math.round(displayedPercent)}%</span>
      </div>

      <div
        className={`w-full bg-gray-200 rounded-2xl h-4 overflow-hidden shadow-inner relative`}
      >
        <div
          className={`h-4 bg-gradient-to-r ${colorGradient} ${glowClass} 
                      transition-all duration-700 ease-out animate-gradient-x`}
          style={{ width: `${displayedPercent}%` }}
        ></div>
      </div>

      <p className="mt-2 text-xs text-gray-500 text-right">
        {completed} / {total} questions completed
      </p>
    </div>
  );
};

export default QuizProgressBar;
