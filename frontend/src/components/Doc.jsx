import React from 'react'
import DocImg from '../assets/doc.png'

const Doc = () => {
  return (
    <div className="border-2 bg-dull-white border-grey rounded-xl border-dashed w-4/5 md:w-3/5 min-h-52 p-4 flex flex-col justify-center items-center">
        <img src={DocImg} alt="" className='h-8 md:h-14 my-4'/>
        <form action={"/upload"} method='post' encType='multipart/form-data' className="flex flex-col">
          <label className='py-2 px-4' for="myfile">Upload a legal document:</label>
          <input className="py-4 my-2 px-8 w-full md:w-60 md:py-2 md:px-4 rounded-lg flex justify-center border-2 border-solid" type="file" accept=".pdf,.docx,.txt" name="" id="myfile" />
          <button type="submit" className='py-4 my-2 px-8 w-full md:w-60 md:py-2 md:px-4 rounded-lg flex justify-center bg-def-black text-white'>Upload</button>
          </form>
    </div>
  )
}

export default Doc