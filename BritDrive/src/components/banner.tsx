import React from "react";
import QuizProgressBar from "./quizProgress";

interface BannerProps {
  upcomingTests: string[]; // list of upcoming test dates
  startQuiz:boolean;
  showQuestionBay: boolean;
  answered:number;
  setStartQuiz: React.Dispatch<React.SetStateAction<boolean>>;
  setShowQuestionBay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: React.FC<BannerProps> = ({ answered,showQuestionBay,startQuiz, upcomingTests,setStartQuiz, setShowQuestionBay }) => {
  return (
    <>
    <div className="sticky top-0 z-10 w-full bg-white shadow-md flex flex-col items-center justify-between p-4 lg:gap-0 gap-4 rounded-2xl ">
        <div className="w-full flex lg:flex-row flex-col items-center justify-between">
        {(startQuiz||showQuestionBay)&&<>
        <div className="flex sm:items-center gap-3 w-[40%] lg:min-w-[180px] min-w-[100px] cursor-pointer" onClick={()=>{setStartQuiz(false);setShowQuestionBay(false)}}>
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
          Brit<span className="text-blue-600">Drive</span>
        </h1>
      </div>

      {!startQuiz&&!showQuestionBay && <div className="w-[20%] text-center">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
          Upcoming Tests
        </h3>
        {upcomingTests.length > 0 ? (
          <ul className="flex justify-center gap-4 text-sm text-gray-800 font-semibold">
            {upcomingTests.map((date, idx) => (
              <li
                key={idx}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-xl shadow-sm"
              >
                {date}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm italic">No tests scheduled</p>
        )}
      </div>}
        </>}
      
      {/* Right: Placeholder (50%) */}
      <div className={`w-[${startQuiz?"40%":"100%"}] flex justify-end gap-4`}>
        {/* Example: You can add user info, buttons, or anything here */}
        {!showQuestionBay && <button onClick={()=>{setShowQuestionBay(true); setStartQuiz(false)}} className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
          Questionbay
        </button>}
         {!startQuiz && <button onClick={()=>{setShowQuestionBay(false); setStartQuiz(true)}} className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
          Start Quiz
        </button>}
        <button className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition">
          LogOut
        </button>
      </div>
        </div>
        <>
         {startQuiz&&!showQuestionBay&&<QuizProgressBar completed={answered} total={600} />}
        </>
        
    </div>
    {/* {startQuiz&&!showQuestionBay&&<div className="sticky lg:top-20 top-32 z-10 w-full bg-white shadow-md flex lg:flex-row flex-col items-center justify-between p-4 lg:gap-0 gap-4 rounded-2xl ">
        <QuizProgressBar completed={answered} total={600} />
    </div>} */}
    </>
    
  );
};

export default Banner;
