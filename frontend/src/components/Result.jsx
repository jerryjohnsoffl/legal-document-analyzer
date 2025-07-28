import React from 'react'

const Result = () => {
  return (
    <div className="w-3/5 my-8 px-2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl my-4 font-medium text-black">Results</h3>
        <div className="w-full min-h-36 border-2 outline-none border-solid rounded-lg">
          <div className="bg-def-black rounded-t-md py-2">
            <h4 className="text-white text-2xl px-4">Summary</h4>
          </div>
          <div className="">

          </div>

        </div>
        <div className="flex flex-col md:flex-row my-4">
            <div className="w-full my-2 md:w-1/2 md:mx-2 min-h-36 border-2 outline-none border-solid rounded-lg">
            <div className="w-full rounded-t-md py-2 bg-def-black">
              <h4 className="text-white text-2xl px-4">Risks Found</h4>
            </div>
            <div className=""></div>
            </div>
            <div className="w-full my-2 md:w-1/2 md:mx-2 min-h-36 border-2 outline-none border-solid rounded-lg">
              <div className="w-full rounded-t-md py-2 bg-def-black">
                <h4 className="text-white text-2xl px-4">Suggestions</h4>
              </div>
              <div className=""></div>
            </div>
        </div>
    </div>
  )
}

export default Result