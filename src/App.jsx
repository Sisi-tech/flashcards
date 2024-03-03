import { useState } from 'react'
import plantData from "./component/Data.jsx";

function App() {
  const [cardId, setCardId] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);

  const handlePreviousBtn = () => {
    if (cardId > 0) {
      setCardId(cardId - 1);
      setShowAnswer(false);
      setShowQuestion(true);
    }
  }
  const handleNextBtn = () => {
    if (cardId < plantData.length - 1) {
      setCardId(cardId + 1);
      setShowAnswer(false);
      setShowQuestion(true);
    }
  }
  const handleShowAnswer = () => {
      setShowAnswer(true);
      setShowQuestion(false);
    
  }

  return (
    <>
    <div className='w-full min-h-screen bg-[url("./assets/flower1.jpg")] bg-cover flex flex-col justify-center items-center text-xl text-center tracking-wide'>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 leading-loose '>
        <div className='pl-4 pr-4'>
          <h2 className='text-4xl pb-6'>The Ultimate Plant Parent!</h2>
          <p>How good of a plant parent are you? Test all of your plant knowledge here!</p>
          <p>Number of cards: {cardId}</p>

          <div onClick={handleShowAnswer} className={`${showAnswer ? 'pointer-events-none' : ''} border border-gray-700 shadow-sm shadow-gray-500 lg:w-[700px] sm:w-auto h-[200px] flex justify-center items-center mt-8 rounded-md hover:scale-110`} 
            style={{backgroundColor: plantData[cardId]?.color || 'white'}}>
            {showQuestion && <h2>{plantData[cardId]?.Question}</h2>}
            {showAnswer && <h2>{plantData[cardId]?.Answer}</h2>}
          </div>

          <div className='flex gap-8 justify-center pt-10'>
            <button type="button" onClick={handlePreviousBtn} className='text-white bg-rose-300 w-[70px] text-3xl rounded-full shadow-md shadow-[#ffe4e6] hover:bg-[#f43f5e] active:bg-[#e11d48] focus:outline-none focus:ring focus:ring-[#fecdd3]'>
              &larr;
            </button>
            <button type="button" onClick={handleNextBtn} className='text-white bg-rose-300 w-[70px] text-3xl rounded-full shadow-md shadow-[#ffe4e6] hover:bg-[#f43f5e] active:bg-[#e11d48] focus:outline-none focus:ring focus:ring-[#fecdd3]' >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
