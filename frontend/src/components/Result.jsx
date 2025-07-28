import React from 'react'

const Result = () => {
  return (
    <div className="w-3/5 my-8 px-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black">Results</h3>
        <div className="mx-2">Summary</div>
        <div className="flex">
            <div className="w-1/2 mx-2">Risks Found</div>
            <div className="w-1/2 mx-2">Suggestions</div>
        </div>

    </div>
  )
}

export default Result