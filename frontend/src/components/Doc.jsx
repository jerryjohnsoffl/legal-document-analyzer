import React from 'react'
import DocImg from '../assets/doc.png'

const Doc = () => {
  return (
    <div className="border-2 border-grey rounded-xl border-dashed w-3/5 h-52 p-4 flex flex-col justify-center items-center">
        <img src={DocImg} alt="" className='h-8 md:h-14 my-4'/>
        <div className="flex flex-col">
          <label className='py-2 px-4' for="myfile">Upload a legal document:</label>
          <input className="bg-def-black py-2 px-4 rounded-lg flex justify-center text-white" type="file" name="" id="myfile" />
          </div>
    </div>
  )
}

export default Doc