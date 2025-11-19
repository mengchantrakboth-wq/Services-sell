import React from 'react'

function Navbar_header() {
  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow">
        <div className='flex md:flex justify-between items-center px-2 md:px-6 lg:px-10 py-3'>
          
          <img src="rog-eye.png" alt="" className='w-[100px]' />

          <div className='hidden md:flex justify-between items-center px-2 md:px-6 lg:px-10'> 
            <ul className='flex'>
              
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
            <button className='px-4 py-1'>
              Login
            </button>
            <button className='mx-5 px-5 py-1 border rounded-2xl border-blue-800 text-blue-800 hover:text-white hover:bg-blue-800 transition'>
              Register
            </button>
          </div>

        </div>
      </nav>

      {/* Add space so content doesn't hide behind navbar */}
      <div className="h-[100px]"></div>
    </div>
  )
}

export default Navbar_header
