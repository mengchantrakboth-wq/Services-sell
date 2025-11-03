import React from 'react'

function Navbar_header() {
  return (
    <div>
      {/* Menu n logo */}
      <nev className='w-full'>
        <div className='flex justify-between items-center px-2 md:px-5 lg:px-30 '>
          <div className='flex items-center'>
            <img src="rog-eye.png" alt="" className='w-[100px] pt-5 ' />
            <ul className='flex ms-170 mt-5'>
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
        </div> 
      </nev>
    </div>
  )
}

export default Navbar_header
