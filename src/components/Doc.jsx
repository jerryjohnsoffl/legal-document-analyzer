import React from 'react'
import DocImg from '../assets/doc.png'

const Doc = () => {
  return (
    <div className="border-2 rounded-xl border-dashed w-3/5 h-52 p-4 flex justify-center items-center">
        <img src={DocImg} alt="" className='h-14'/>
    </div>
  )
}

export default Doc