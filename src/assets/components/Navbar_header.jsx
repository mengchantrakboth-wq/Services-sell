import React from 'react'

function Navbar_header() {
  return (
    <div>
      {/* Menu n logo */}
      <nev className="w-full sticky">
        <div className='flex md:flex justify-between items-center px-2 md:px-6 lg:px-10'>
          <img src="rog-eye.png" alt="" className='w-[100px] pt-5  ' />
            <div className='hidden md:flex justify-between items-center px-2 md:px-6 lg:px-10 '> 
              <ul className='flex mx-auto- mt-5 md:flex lg:flex'>
                <a href="" className='hover:scale-115 transition'>
                  <li className='md:px-3 lg:px-4'>
                    <p>Home</p>
                  </li>
                </a>
                <a href="" className='hover:scale-115 transition'>
                  <li className='md:px-3 lg:px-4'>
                    <p>About Us</p>
                  </li>
                </a>
                <a href="" className='hover:scale-115 transition'>
                  <li className='md:px-3 lg:px-4'>
                    <p>Talent</p>
                  </li>
                </a>
                <a href="" className='hover:scale-115 transition'>
                  <li className='md:px-3 lg:px-4'>
                    <p>Pages</p>
                  </li>
                </a>
                <a href="" className='hover:scale-115 transition'>
                  <li className='md:px-3 lg:px-4'>
                    <p>News</p>
                  </li>
                </a>
              </ul>
          </div>
          <div>
            <button className='px-4 py-1 '>
              Login
              </button>
            <button className='mx-5 mt-5  px-5 py-1 border rounded-2xl border-blue-800 text-blue-800 hover:text-white hover:bg-blue-800  transition'>
              Register
            </button>
          </div>
            
        </div>
        
       
      </nev>
    </div>
  )
}

export default Navbar_header
