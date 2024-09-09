import './App.css'
import Home from './Home'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold ">
        Welcome to Basic React and Tailwind Application
      </h1>
      <Home quote={`"Design is not just what it looks like and feels like. Design is how it works."`} author={"— Steve Jobs"}/>
    </>
  )
}

export default App
