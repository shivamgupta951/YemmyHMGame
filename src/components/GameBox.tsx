import React from "react";
import { GiHangingSpider } from "react-icons/gi";
import words from "../wordList.json";
import { useState } from "react";

const GameBox = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  return (
    <div className="w-[60%] text-2xl h-[280px] size-[45%] lg:w-[50%] lg:h-[40%] border rounded-2xl bg-orange-300 flex justify-center items-center flex-col lg:text-4xl text-red-950 font-extrabold shadow-xl shadow-red-950">
      {" "}
      Hangman! <GiHangingSpider className="animate-pulse"></GiHangingSpider>
      <div className="btn-sm btn px-8 my-4">Start Game!</div>
      {/* <div>{wordToGuess}</div> */}
      {/* <div className="card w-full bg-base-100 shadow-xl mt-20">
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
        </div> */}
    </div>
  );
};

export default GameBox;
