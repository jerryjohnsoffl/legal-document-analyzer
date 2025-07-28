import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Doc from './components/doc'
import Result from './components/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center py-4">
        <h1 className="text-3xl text-black md:text-4xl lg:text-5xl font-medium my-8">Legal Document Analyser</h1>
        <Doc />
        <Result />
      </div>
    </>
  )
}

export default App
