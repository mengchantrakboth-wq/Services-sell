import React from 'react'

function Client() {
  return (
    <div className='w-full mt-15'>
      <div className=' lg:flex bg-gray-300 p-20  md:justify-between lg:justify-betwee '>
        <div className='lg:w-[29%] justify-center text-center items-center m-5 md:text-left '>
            <h1 className='text-orange-400 text-2xl  '>Testimonials</h1>
            <h1 className='text-3xl text-white pt-2 '>Client Testimonials</h1>
            <p className='font-normal pt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quis tempore doloribus eveniet illum, corrupti odit facere atque fugiat at.</p>
        </div>
        <div className='md:flex lg:flex justify-center mx-auto items-center m-5 md:px-1 md:my-10 lg:w-[59%] lg:px-3  lg:me-10  '>
            <div className='lg:text-center text-center p-5 my-10 lg:my-2 md:my-2  border rounded-3xl border-black bg-transparent hover:scale-110 transition  md:px-5 md:mx-10 lg:mx-15 hover:bg-purple-400 hover:text-white   '>   
                <div className="flex flex-col items-center text-center duration-300">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPMQUInMjk-0FNxF2c8oALFdaTTce1NWEAA&s"
                        alt="Aizen profile"
                        className="w-[39%] md:w-[39%] lg:w-[29%] rounded-full"
                    />
                    <div className="mt-3">
                        <h1 className="text-2xl text-purple-600 font-semibold">Aizen</h1>
                        <p className="font-normal text-sm">Marketing</p>
                    </div>
                </div>
                <p className='  md:pt-5 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus exercitationem.</p>
            </div>
            <div className='lg:text-center text-center p-5 my-10 lg:my-2  border rounded-3xl border-black bg-transparent hover:scale-110 hover:bg-purple-400 hover:text-white transition  md:px-5 md:mx-10 lg:mx-15   '>   
                <div className="flex flex-col items-center text-center duration-300">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPMQUInMjk-0FNxF2c8oALFdaTTce1NWEAA&s"
                        alt="Aizen profile"
                        className="w-[39%] md:w-[39%] lg:w-[29%] rounded-full"
                    />
                    <div className="mt-3">
                        <h1 className="text-2xl text-purple-600 font-semibold">Aizen</h1>
                        <p className="font-normal text-sm">Marketing</p>
                    </div>
                </div>
                <p className='  md:pt-5 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus exercitationem.</p>
            </div>
             
            
             
             
             
        </div>
      </div>
    </div>
  )
}

export default Client
