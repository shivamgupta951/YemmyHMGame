import { useState } from "react";
import words from "../wordList.json";

const WordGuess = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  return (
    <div>
      <div>{wordToGuess}</div>
      <div className="card w-full bg-base-100 shadow-xl mt-20">
        <div className="card-body items-center text-center ">
          <div>
            <h2 className="card-title text-primary text-2xl">Hello</h2>
            <p className="text-lg"></p>
          </div>
          <div className="card-actions mt-4">
            <button
              className="btn btn-primary"
              onClick={() => {
                setWordToGuess(() => {
                  return words[Math.floor(Math.random() * words.length)];
                });
              }}
            >
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordGuess;
