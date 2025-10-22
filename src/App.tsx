import { useState } from "react";
import words from './wordList.json';
import Navbar from "./components/Navbar"
function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>
  {
    return words[Math.floor(Math.random()*words.length)]
  });
  return (
    <div className="min-h-screen flex flex-col bg-base-300">
      <Navbar/>
      <div>{wordToGuess}</div>
      <div className="card w-96 bg-base-100 shadow-xl mt-20">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary text-2xl">Hello</h2>
          <p className="text-lg"></p>
          <div className="card-actions mt-4">
            <button className="btn btn-primary" onClick={()=>{window.location.reload()}}>Click Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
