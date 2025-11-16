import React from "react";
import { GiHangingSpider } from "react-icons/gi";
import words from "../wordList.json";
import { useState } from "react";
import { IoExit } from "react-icons/io5";

const GameBox = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [gameStatus, setGameStatus] = useState(false);
  const [firstGame, setFirstGame] = useState(true);
  const [length, setLength] = useState(wordToGuess.length);
  return (
    <div
      className={`w-[60%] text-2xl h-[280px] size-[45%] lg:w-[50%] lg:h-[40%] border relative rounded-2xl ${
        gameStatus ? "bg-orange-200" : "bg-orange-300"
      } flex justify-center items-center flex-col lg:text-4xl text-red-950 font-extrabold shadow-xl shadow-red-950`}
    >
      {gameStatus ? (
        <div className="border border-black w-full h-[100%] flex justify-end items-center flex-col py-6">
          <div className="w-[90%] border border-black h-[80%] flex justify-end items-center flex-col">
            <div className="relative w-[100%] border border-black h-[97%] flex justify-center items-center">
              <div className="absolute h-[3%] w-[25%] bg-black left-[50%] top-0"></div>
              <div className="absolute h-[3%] w-[25%] bg-black left-[50%] top-0"></div>
              <div className="absolute h-[2%] w-[15%] bg-black left-[64%] rotate-45 top-[40%]"></div>
              <div className="absolute h-[2%] w-[15%] bg-black left-[74%] -rotate-45 top-[40%]"></div>
              <div className="absolute h-[2%] w-[15%] bg-black left-[64%] -rotate-45 top-[71%]"></div>
              <div className="absolute h-[2%] w-[15%] bg-black left-[74%] rotate-45 top-[71%]"></div>
              <div className="absolute h-[15%] w-[2%] bg-black left-[75%] top-0"></div>
              <div className="absolute h-[30%] w-[1%] bg-black left-[76%] top-[35%]"></div>
              <div className="absolute h-[20%] w-[13%] rounded-full border-2 border-black left-[70%] top-[15%]"></div>
              <div className="w-[2%] h-full bg-black"></div>
            </div>
            <div className="w-[40%] h-[3%] bg-black mb-2"></div>
          </div>
          <div className="border border-black w-[95%] h-[20%] py-1 flex justify-around items-end">
            {Array.from({ length }).map((_, i) => (
              <div
                key={i}
                className="w-[8%] border-b-4 h-full flex justify-center items-center border-black"
              >
                {i == 0 && wordToGuess.charAt(i)}
              </div>
            ))}
          </div>

          <div
            className="flex border border-black justify-center items-center space-x-1 rounded-lg bg-black text-yellow-400 p-1 absolute -top-1 -right-1 cursor-pointer transition-all transform duration-300 ease-in-out hover:text-yellow-600 hover:scale-105"
            onClick={() => {
              setGameStatus(false);
              setFirstGame(false);
              const newWord = words[Math.floor(Math.random() * words.length)];
              setWordToGuess(newWord);
              setLength(newWord.length);
            }}
          >
            <div className="text-[30%]">Exit Game</div>
            <IoExit size={20}></IoExit>
          </div>
        </div>
      ) : (
        <>
          {" "}
          Hangman! <GiHangingSpider className="animate-pulse"></GiHangingSpider>
          {firstGame ? (
            <div
              className="btn-sm btn px-8 my-4"
              onClick={() => {
                setGameStatus(true);
              }}
            >
              Start Game!
            </div>
          ) : (
            <div
              className="btn-sm btn px-8 my-4"
              onClick={() => {
                setGameStatus(true);
              }}
            >
              Start New Game!
            </div>
          )}
          {firstGame ? (
            <div></div>
          ) : (
            <div className="border relative px-4 bg-black flex mt-4 justify-center items-center space-x-1">
              <div className="text-[50%] text-red-500">Previous Result:</div>
              <div className="text-sm text-green-500">Win/Lose</div>
              <div className="mx-1 text-yellow-700 text-[40%]">(Track)</div>
            </div>
          )}
        </>
      )}
      {/* <div>{wordToGuess}</div> */}
      {/* <div className="card w-true bg-base-100 shadow-xl mt-20">
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
