import { useEffect, useState } from "react";
import questData from "../assets/questData";
import britDrive from "../assets/Gemini_Generated_Image_358oab358oab358o.png"
// --- Placeholder Quiz Page (for flow context) ---
const QuizPage = ({ showScreen }: { showScreen: (screen: string) => void }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  // State to handle the submission message and replace the forbidden alert()
  const [submissionMessage, setSubmissionMessage] = useState<{type:any, text:string}>({ type: null, text: "" });
  const [questionData, setQuestionData] = useState(questData[Math.floor(Math.random()*questData.length)
]);
  const [isCorrect, setIscorrect]=useState(false);
  const updateQuestionData = ()=>{
    setQuestionData(questData[Math.floor(Math.random()*questData.length)])
    setSelectedAnswer("")
    // setIscorrect(false);
    setSubmissionMessage({ type: null, text: "" });
  }
  // We only need a single random question, so we set it once
    // const [questionData] = useState(
    //     initialQuestData // Use placeholder for stability
    // );

    // Handles the selection change
    const handleOptionChange = (event:any) => {
        // The value from the input is the full string (e.g., "A : DOM Manipulation")
        setSelectedAnswer(event.target.value);
    };

    // Clears the message if the user changes their selection
    useEffect(() => {
        console.log("questionData.image :  ",questionData.image)
        if (submissionMessage.text) {
            setSubmissionMessage({ type: null, text: "" });
        }
    }, [selectedAnswer]);

    const handleSubmit = (event:any) => {
        event.preventDefault();

        if (!selectedAnswer) {
            // Fix 3: Replace alert() with UI message
            setSubmissionMessage({ type: 'error', text: 'Please select an option before submitting.' });
            return;
        }
// console.log("selectedAnswer: ",selectedAnswer, "   questionData.answer:",questionData.answer)
        // Determine if the selected answer matches the correct answer
        const isTrue = selectedAnswer.split(" : ")[0] === questionData.answer;
        setIscorrect(selectedAnswer.split(" : ")[0] === questionData.answer)
        if (isTrue) {
            setSubmissionMessage({ 
                type: 'success', 
                text: `Correct! The answer is: ${questionData.answer}` 
            });
        } else {
            setSubmissionMessage({ 
                type: 'error', 
                text: `Incorrect. You chose ${selectedAnswer}` 
            });
        }
    };
  
  return (

    <div className={`bg-[url(${britDrive})] min-h-screen flex items-center justify-center p-4 font-inter`}>
            <div className={`max-w-xl w-full bg-[url(${questionData.image})] bg-no-repeat bg-center bg-size-[auto_50px]`}>
                
                <form onSubmit={handleSubmit} className="bg-transparent shadow-xl rounded-xl p-8 border border-gray-200">
                    
                    {/* --- Question Heading --- */}
                    <div className="flex flex-row">
                        <h3 dangerouslySetInnerHTML={{ __html: questionData.question }} className="text-2xl font-extrabold leading-tight text-gray-900 mb-8">
                        {/* <span className="text-indigo-600 mr-2">Q{questionData.number}.</span>  */}
                        {/* {questionData.question} */}
                       </h3>
                       {questionData.image && <img src={questionData.image} height={100} width={100}/>}
                    </div>
                   
                    
                    {/* --- Options Selection Area (Radio Group) --- */}
                    <div className="space-y-4">
                        {Object.entries(questionData.options).map((option) => {
                            const optionKey = option[0]; // e.g., "A"
                            const optionText = option[1]; // e.g., "DOM Manipulation"
                            const optionValue = option.join(" : "); // e.g., "A : DOM Manipulation"
                            const isSelected = selectedAnswer === optionValue;
                            
                            return (
                                // Fix 1: Use a stable key (the option key) on the mapped element.
                                <label
                                    key={optionKey} 
                                    // Fix 2: Removed unnecessary htmlFor because the input is nested/wrapped
                                    className={`text-left
                                        relative flex items-center p-4 rounded-xl cursor-pointer shadow-sm
                                        transition-all duration-200 ease-in-out
                                        ${isSelected
                                            ? 'bg-transparent border-2 border-indigo-600 ring-2 ring-indigo-300'
                                            : 'bg-transparent border border-gray-300 hover:bg-gray-50'
                                        }
                                    `}
                                >
                                    <div className="flex items-center h-5">
                                        {/* The Radio Input */}
                                        <input
                                            // Fix 1: Removed redundant key from input
                                            id={`q${questionData.number}-${optionKey}`}
                                            name={`question-${questionData.number}`}
                                            type="radio"
                                            value={optionValue}
                                            checked={isSelected}
                                            onChange={handleOptionChange}
                                            className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer transition duration-150 ease-in-out"
                                        />
                                    </div>

                                    {/* The Option Text */}
                                    <span className="ml-4 text-base font-medium text-gray-900">
                                        <span className="font-semibold text-indigo-700 mr-2">{optionKey}.</span>
                                        {optionText}
                                    </span>
                                </label>
                            );
                        })}
                    </div>

                    {/* --- Submission Button --- */}
                    <div className="mt-10">
                        {isCorrect && submissionMessage.type === 'success' ? <p
                            id="next"
                            className="w-full justify-center rounded-lg bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            onClick={()=>updateQuestionData()}
                            // disabled={!selectedAnswer || submissionMessage.type === 'success'} // Disable after submission
                        >
                            Next
                        </p>:<button
                            type="submit"
                            id="submit"
                            className="w-full justify-center rounded-lg bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            disabled={!selectedAnswer || submissionMessage.type === 'success'} // Disable after submission
                        >
                            Submit Answer
                        </button>}
                    </div>

                    {/* --- Message Box (Replaces alert()) --- */}
                    {submissionMessage.text && (
                        <div 
                            className={`mt-6 p-4 rounded-lg font-medium shadow-md ${
                                submissionMessage.type === 'success' 
                                    ? 'bg-green-100 text-green-800 border border-green-300'
                                    : 'bg-red-100 text-red-800 border border-red-300'
                            }`}
                        >
                            {submissionMessage.text}
                        </div>
                    )}

                </form>
                
                {selectedAnswer &&<div className="mt-6 text-center text-sm text-gray-500">
                    Your Selection: {selectedAnswer ? selectedAnswer : 'None'}
                </div>}
            </div>
        </div>
  );
};

export default QuizPage;
