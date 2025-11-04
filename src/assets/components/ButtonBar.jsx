import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { SiTalenthouse } from "react-icons/si";
import { MdOutlineContactPage } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
function ButtonBar() {
  return (
    <div>
      <div className='w-full lg:hidden md:hidden flex justify-between items-center bg-gray-300 border border-white  '>
          <div className=' flex items-center m-auto '>
            <ul className='flex mt-5 md:flex lg:flex'>
              <a href="" className='hover:scale-115 transition '>
                <li className='px-3 md:px-3 lg:px-4'>
                  <IoHomeOutline className='m-auto' />
                  <p>Home</p>
                </li>
              </a>
              <a href="" className='hover:scale-115 transition'>
                <li className='px-3 md:px-3 lg:px-4'>
                  <FaPersonCircleQuestion className='m-auto' />
                  <p>About Us</p>
                </li>
              </a>
              <a href="" className='hover:scale-115 transition'>
                <li className='px-3 md:px-3 lg:px-4'>
                  <SiTalenthouse className='m-auto' />
                  <p>Talent</p>
                </li>
              </a>
              <a href="" className='hover:scale-115 transition'>
                <li className='px-3 md:px-3 lg:px-4'>
                  <MdOutlineContactPage className='m-auto'/>
                  <p>Pages</p>
                </li>
              </a>
              <a href="" className='hover:scale-115 transition'>
                <li className='px-3 md:px-3 lg:px-4'>
                  <IoNewspaperOutline className='m-auto'/>
                  <p>News</p>
                </li>
              </a>
            </ul>
          </div>
        </div> 
    </div>
  )
}

export default ButtonBar
