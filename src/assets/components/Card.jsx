import React from 'react'
import CardSolution from '../utils/CardSolution'
import { IoHomeOutline } from "react-icons/io5";

function Card() {
    const arr = [
        {icon:IoHomeOutline,title:'Model',text:'Rog-G15',conclu:'more' },
        {icon:IoHomeOutline,title:'Model',text:'Rog-G16',conclu:'more' },
        {icon:IoHomeOutline,title:'Model',text:'Rog-G18',conclu:'more' },
        {icon:IoHomeOutline,title:'Model',text:'Rog-Scar-G15',conclu:'more' },
        {icon:IoHomeOutline,title:'Model',text:'Rog-Scar-G17',conclu:'more' },
        {icon:IoHomeOutline,title:'Model',text:'Rog-Scar-G18',conclu:'more' },
    ]
  return (
    <div className='w-full mt-20 py-5 p-3 bg-[url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIhSkbIYc4tCCJqUgpZelNiTaenRFIgOOGbxHgKf4Afxiziy2CamCVJheKLR6BHwMIoO6J0ELt7DB4kpyus6bFSJJxqxAK9wNr66D0jPOp54MDO-BjAoFiUAYYjzpkeEOgAckxYsjwsrhAEf7kekQM-9yGBn9uQYcxLxPgGgUG6IMurLBhVpYQTwejcQ/s1600/Abstract-mesh-background-3840x2160.png)] bg-center bg-cover'>

      <div className=' md:w-[93%] lg:w-[84%] flex justify-between flex-wrap mx-auto   '>
        {
          arr.map((v,i)=>{
              return(
                  <CardSolution key={i} icon={v.icon} title={v.title} text={v.text} conclu={v.conclu}/> 
              )
          })
        }
      </div>
      
    </div>
  )
}

export default Card
