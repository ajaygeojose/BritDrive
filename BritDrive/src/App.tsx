import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import QuizPage from "./components/quiz";
import Banner from "./components/banner";
import QuestionBay from "./components/questionBay";

// import image form "../ "
function App() {
  // const [count, setCount] = useState(0)
  const [currentScreen, setCurrentScreen] = useState("Register"); // Start on Register screen
  const [startQuiz, setStartQuiz] = useState(false);
  const [showQuestionBay, setShowQuestionBay]=useState(false);
  const [answered, setAnswered] = useState<number>(0);
  const upcoming = ["Nov 12", "Nov 25", "Dec 10"];
  const showScreen = (screenName: string) => {
    setCurrentScreen(screenName);
  };
  console.log(currentScreen)
  return (
    <>
      <Banner answered={answered} showQuestionBay={showQuestionBay} startQuiz={startQuiz} upcomingTests={upcoming} setStartQuiz={setStartQuiz} setShowQuestionBay={setShowQuestionBay}/>
      {showQuestionBay && !startQuiz && <QuestionBay />}
      {!startQuiz ? (
        <header className="flex flex-col items-center justify-center py-12 bg-gradient-to-r from-blue-50 to-purple-50">
          {/* Logo + Brand Name */}
          <div className="flex items-center gap-3 mb-4">
            {/* <img
              src={britDrive}
              alt="BritDrive logo"
              className="h-16 w-16 object-contain drop-shadow-md"
            /> */}
            <h1 className="text-8xl font-bold text-gray-800 tracking-tight">
              Brit<span className="text-blue-600">Drive</span>
            </h1>
          </div>

          <p className="text-gray-600 text-lg font-medium text-center">
           Helping you prepare for your UK driving theory test success. Start your practice now! 🚗💨
          </p>

          <div
            className="mt-10 flex items-center justify-center gap-x-6"
            onClick={() => setStartQuiz((prev) => !prev)}
          >
            {!startQuiz ? (
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </a>
            ) : (
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Stop Quiz
              </a>
            )}
          </div>
        </header>
      ) : (
        <>
          <QuizPage showScreen={showScreen} setAnswered={setAnswered} />
        </>
      )}
    </>
  );
}

export default App;
