import questData from '../assets/questData'; // Assuming this exports an array of questions

// --- Type Definition ---

// Define the interface for a single question object
interface Question {
  number: number;
  question: string;
  image: string | null;
  options: { [key: string]: string }; // Allows A, B, C, D, etc., without listing all of them
  answer: string; // Should match one of the keys in options (e.g., "A")
}

// Type the imported data as an array of the Question interface
// If using plain JS, you can omit the <Question[]> part.
const questions: Question[] = questData as Question[]; 

const QuestionBay = () => {

  const renderQuestionReview = (question: Question, index: number) => {
    const questionId = question.number;
    const correctKey = question.answer;

    return (
      <div 
        key={questionId} 
        className="bg-white shadow-lg sm:rounded-xl p-6 border-2 border-indigo-200 mb-8"
      >
        
        {/* --- Question Heading --- */}
        <h3 className="text-xl font-bold leading-7 text-gray-900 mb-4">
          <span className="text-indigo-600 mr-2">Q{index + 1}.</span> {question.question}
        </h3>

        {/* --- Image Display (Conditional) --- */}
        {question.image && (
            <div className="mb-4">
                {/* ⚠️ NOTE: You should ensure the image source is safe and correctly formatted */}
                <img 
                    src={question.image} 
                    alt={`Image for question ${question.number}`} 
                    className="max-w-full h-auto rounded-lg shadow-md"
                />
            </div>
        )}
        
        {/* --- Options and Answer Key --- */}
        <div className="space-y-3">
          {Object.entries(question.options).map(([key, value]) => {
            const isCorrectAnswer = key === correctKey;
            
            // Skip rendering if the value is an empty string (e.g., if options.D is missing)
            if (!value) return null; 

            return (
              <div
                key={key}
                className={`
                  relative flex items-center p-3 rounded-lg border-2
                  transition-all duration-150 ease-in-out
                  ${isCorrectAnswer 
                    ? 'bg-green-50 border-green-600 ring-2 ring-green-600 font-semibold'
                    : 'bg-white border-gray-300 text-gray-700'
                  }
                `}
              >
                
                {/* Option Key (A, B, C...) */}
                <span className={`
                  inline-flex items-center justify-center h-6 w-6 rounded-full 
                  mr-4 font-bold text-sm
                  ${isCorrectAnswer 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-600'
                  }
                `}>
                  {key} {/* Key is already uppercase (A, B, C) */}
                </span>

                {/* The Option Text - FIX APPLIED HERE */}
                <span className="ml-2 text-base font-medium text-gray-900">
                  {value} {/* 👈 FIXED: Renders the actual option value */}
                </span>

                {/* Correct Answer Tag */}
                {isCorrectAnswer && (
                    <span className="ml-auto px-3 py-1 text-xs font-bold text-white bg-green-600 rounded-full shadow-md">
                        Correct Answer
                    </span>
                )}
              </div>
            );
          })}
        </div>
        
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          ✅ Quiz Review & Solutions
      </h1>
      
      {/* Map through the correctly typed questions array */}
      {questions.map(renderQuestionReview)}

      {/* --- Footer --- */}
      <div className="text-center mt-12 p-4 bg-gray-50 rounded-lg text-gray-600">
        End of Review. Total Questions: **{questions.length}**
      </div>
    </div>
  )
}

export default QuestionBay