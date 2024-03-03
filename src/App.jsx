import { useState } from 'react'

function App() {
  const [data, setData] = useState({data})
  return (
    <>
    <div className='w-full min-h-screen bg-[url("./assets/flower1.jpg")] bg-cover flex flex-col justify-center items-center text-xl text-center tracking-wide'>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 leading-loose '>
        <div className='pl-4'>
          <h2 className='text-4xl'>The Ultimate Plant Parent!</h2>
          <p>How good of a plant parent are you? Test all of your plant knowledge here!</p>
          <p>Number of cards: 10</p>
          <div className='flex gap-8 justify-center pt-8'>
            <button 
              type="button" 
              className='text-white bg-[#fda4af] w-[70px] text-3xl rounded-full shadow-md shadow-[#ffe4e6]'
            >
              &larr;
            </button>
            <button
              type="button" 
              className='text-white bg-[#fda4af] w-[70px] text-3xl rounded-full shadow-md shadow-[#ffe4e6]'
            >
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
