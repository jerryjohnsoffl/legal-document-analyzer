import React from 'react'
import DocImg from '../assets/doc.png'

const Doc = () => {
  return (
    <div className="border-2 bg-dull-white border-grey rounded-xl border-dashed w-4/5 md:w-3/5 h-52 p-4 flex flex-col justify-center items-center">
        <img src={DocImg} alt="" className='h-8 md:h-14 my-4'/>
        <div className="flex flex-col">
          <label className='py-2 px-4' for="myfile">Upload a legal document:</label>
          <input className="bg-def-black py-4 px-8 w-full md:w-60 md:py-2 md:px-4 rounded-lg flex justify-center text-white" type="file" accept=".pdf,.docx,.txt" name="" id="myfile" />
          </div>
    </div>
  )
}

export default Doc