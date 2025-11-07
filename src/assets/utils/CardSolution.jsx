import React from 'react'

function CardSolution({ icon : Icon, title, text, conclu}) {
  return (
    <div className='w-[59%] md:w-[39%] lg:w-[29%] bg-transparent border rounded-lg overflow-hidden my-5 mx-auto hover:scale-110 hover:bg-amber-300 transition'>
      
      <div className='flex justify-center items-center p-4 py7 shadow-sm '>
        <div className='text-center '>
          <Icon className={`text-3xl mx-auto ${Icon}`} />
          <h1 className='text-2xl font-serif'>{title}</h1>
          <p className='font-normal'>{text}</p>
          <p className='font-normal'>{conclu}</p>
        </div>
      </div>
    </div>

  )
}

export default CardSolution
