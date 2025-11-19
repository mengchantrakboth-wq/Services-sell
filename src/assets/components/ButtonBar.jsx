import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { SiTalenthouse } from "react-icons/si";
import { MdOutlineContactPage } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

function ButtonBar() {
  return (
    <div>

      <div className='fixed bottom-0 left-0 w-full z-50 lg:hidden md:hidden flex items-center bg-gray-300 border border-white'>
        <ul className='flex justify-between text-center m-auto mt-5'>
          
          <a href="" className='hover:scale-115 transition'>
            <li className='px-4'>
              <IoHomeOutline className='m-auto' />
              <p>Home</p>
            </li>
          </a>

          <a href="" className='hover:scale-115 transition'>
            <li className='px-4'>
              <FaPersonCircleQuestion className='m-auto' />
              <p>About Us</p>
            </li>
          </a>

          <a href="" className='hover:scale-115 transition'>
            <li className='px-4'>
              <SiTalenthouse className='m-auto' />
              <p>Talent</p>
            </li>
          </a>

          <a href="" className='hover:scale-115 transition'>
            <li className='px-4'>
              <MdOutlineContactPage className='m-auto'/>
              <p>Pages</p>
            </li>
          </a>

          <a href="" className='hover:scale-115 transition'>
            <li className='px-4'>
              <IoNewspaperOutline className='m-auto'/>
              <p>News</p>
            </li>
          </a>

        </ul>
      </div>

    </div>
  )
}

export default ButtonBar
