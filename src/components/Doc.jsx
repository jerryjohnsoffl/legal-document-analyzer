import React from 'react'
import DocImg from '../assets/doc.png'

const Doc = () => {
  return (
    <div className="border-2 border-grey rounded-xl border-dashed w-3/5 h-52 p-4 flex flex-col justify-center items-center">
        <img src={DocImg} alt="" className='h-8 md:h-14 my-4'/>
        <div className="">Upload a legal document</div>
    </div>
  )
}

export default Doc