import React from 'react'

function Footer() {
  return (
    <div>
      <div className='w-full pt-8 bg-gray-400 p-3 pb-20'>
      <div className='flex md:w-[93%] lg:w-[85%] mx-auto flex-wrap gap-1 justify-center'>
        <div className='w-[22%] my-2 p-1'>
            <ul>
                <li>About</li>
                <li>Press</li>
                <li>Partner</li>
                <li>Blog</li>
            </ul>
        </div>

        <div className='w-[22%] my-2 p-1'> 
            <ul >
                <li>Jobs</li>
                <li>Job Refer</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
        </div>

        <div className='w-[22%] my-2 p-1'>
            <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>Support</li>
            </ul>
        </div>

        <div className='w-[22%] my-2 p-1'>
            <ul>
                <li>Terms</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
      </div>
      <div className='border-t pt-2 border-gray-200 mt-2 md:w-[92%] lg:w-[85%] mx-auto'>
        <p className='text-white'>@Create by, Bro Both</p>
       </div>
    </div>
    </div>
  )
}

export default Footer
