import { useState } from "react";
import words from "../wordList.json";

const GameSection = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [boxStatus, setBoxStatus] = useState(() => {
    return Math.floor(Math.random() * 10);
  });
  return (
    <div className="w-full min-h-[900px] border-b-2 border-dashed border-red-400 flex justify-center">
      <div className="border w-[45%] flex justify-start pt-40 items-center py-10 flex-col space-y-24">
        <div className="border-2 w-[50%] border-blue-700 shadow-lg shadow-blue-400 min-h-4 rounded-md bg-black"></div>
        <div className="border w-[50%] justify-between min-h-[50%] flex flex-wrap p-4 rounded-xl bg-gradient-to-br from-[#020727] via-black to-green-950">
          <div className="border size-[30%] flex justify-center items-center text-black rounded-md bg-white mt-2">
            {boxStatus}
          </div>
          <div className="border size-[30%] flex justify-center items-center text-black rounded-md bg-white animate-ping mt-2">
            {boxStatus}
          </div>
          <div className="border size-[30%] flex justify-center items-center text-black rounded-md bg-white mt-2">
            {boxStatus}
          </div>
          <div className="border size-[30%] flex justify-center items-center text-black rounded-md bg-white mt-2">
            {boxStatus}
          </div>
          <div className="border size-[30%] flex justify-center items-center text-black rounded-md bg-white mt-2">
            {boxStatus}
          </div>
          <div className="border size-[30%] flex justify-center items-center text-black rounded-md bg-white mt-2">
            {boxStatus}
          </div>
          <div className="border size-[30%] flex justify-center items-center text-black rounded-md bg-white mt-2">
            {boxStatus}
          </div>
          <div className="border size-[30%] flex justify-center items-center text-black rounded-md bg-white mt-2">
            {boxStatus}
          </div>
          <div className="border size-[30%] flex justify-center items-center text-black rounded-md bg-white mt-2">
            {boxStatus}
          </div>
        </div>
      </div>
      <div className="border w-[55%]">
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
    </div>
  );
};

export default GameSection;
