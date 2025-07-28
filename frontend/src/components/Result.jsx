import React from 'react'

const Result = () => {
  return (
    <div className="w-4/5 md:w-3/5 my-8 px-2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl my-4 font-medium text-black">Results</h3>
        <div className="w-full border-none bg-dull-white rounded-2xl">
          <div className="rounded-t-xl py-2">
            <h4 className="text-black text-2xl font-medium px-4">Summary</h4>
          </div>
          <div className="min-h-36 rounded-b-xl">

          </div>

        </div>
        <div className="flex flex-col md:flex-row my-4">
            <div className="w-full bg-dull-white my-2 md:w-1/2 md:mx-2 border-none rounded-2xl">
            <div className="w-full rounded-t-xl py-2">
              <h4 className="text-black text-xl font-medium px-4">Risks Found</h4>
            </div>
            <div className="min-h-36 rounded-b-xl"></div>
            </div>
            <div className="w-full my-2 bg-dull-white md:w-1/2 md:mx-2 min-h-36 border-none rounded-2xl">
              <div className="w-full rounded-t-xl py-2">
                <h4 className="text-black text-xl font-medium px-4">Suggestions</h4>
              </div>
              <div className="min-h-3 rounded-b-xl"></div>
            </div>
        </div>
    </div>
  )
}

export default Result