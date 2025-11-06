import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import QuizPage from './components/quiz';
import britDrive from "../src/assets/Gemini_Generated_Image_l703krl703krl703.png"

// import image form "../ "
function App() {
  const [count, setCount] = useState(0)
  const [currentScreen, setCurrentScreen] = useState('Register'); // Start on Register screen
  const [startQuiz, setStartQuiz] = useState(false);
  const showScreen = (screenName:string) => {
        setCurrentScreen(screenName);
    };
  //  className='bg-britDrive bg-white/95 backdrop-blur-sm h-20 w-full'
  return (
    <>
    {!startQuiz ?
      <div className="relative isolate px-6 pt-0 lg:px-8">
        {/* <img src={britDrive} height={"70rem"} width={"70rem"}/> */}
        <div className={`mx-auto max-w-2xl py-0 sm:py-0 lg:py-0 bg-no-repeat bg-center bg-size-[auto_40px]`}>
          <div className="text-center">
            {/* <h1 className="text-5xl font-semibold tracking-tight text-balance text-blue sm:text-7xl">
              BritDrive
            </h1> */}
            <img src={britDrive} height={300} width={500}/>
            {/* <img src={`url(${britDrive})`} height="auto" width={300}/> */}
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Your perfect learning companion on road safety...!
            </p>
            <div
              className="mt-10 flex items-center justify-center gap-x-6"
              onClick={() => setStartQuiz(prev=>!prev)}
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
          </div>
        </div>
      </div>: <QuizPage showScreen={showScreen}/>}

    </>
  );
}

export default App
