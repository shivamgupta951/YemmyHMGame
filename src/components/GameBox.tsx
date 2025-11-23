import React from "react";
import { GiHangingSpider } from "react-icons/gi";
import words from "../wordList.json";
import { useState } from "react";
import { IoExit } from "react-icons/io5";
import { FaSkull } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

type input = {
  title: string;
  chars: string[];
  onExit: () => void;
  gameStatus: boolean;
  setGameStatus: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  winner: boolean;
  setWinner: React.Dispatch<React.SetStateAction<boolean>>;
  wordToGuess: string;
  setWordToGuess: React.Dispatch<React.SetStateAction<string>>;
  wrongLetters: string[];
  setWrongLetters: React.Dispatch<React.SetStateAction<string[]>>;
};

const GameBox: React.FC<input> = ({
  title,
  chars,
  onExit,
  gameStatus,
  setGameStatus,
  wordToGuess,
  setWordToGuess,
  wrongLetters,
  setWrongLetters,
  gameOver,
  setGameOver,
  winner,
  setWinner
}) => {
  const [firstGame, setFirstGame] = useState(true);
  const [prevWord, setPrevWord] = useState("");
  const [result, setResult] = useState("LOSE");
  return (
    <div
      className={`w-[60%] text-2xl h-[280px] size-[45%] lg:w-[50%] lg:h-[40%] border relative rounded-2xl ${
        gameStatus ? "bg-orange-200" : "bg-orange-300"
      } flex justify-center items-center flex-col lg:text-4xl text-red-950 font-extrabold shadow-xl shadow-red-950`}
    >
      {gameStatus ? (
        <div className="border-black w-full h-[100%] flex justify-end items-center flex-col py-6">
          <div className="w-[90%] border-black h-[80%] flex justify-end items-center flex-col">
            <div className="relative w-[100%] border-black h-[97%] flex justify-center items-center">
              <div className="absolute h-[3%] w-[25%] bg-black left-[50%] top-0"></div>

              {/*left hand*/}
              {wrongLetters.length >= 9 && (
                <div className="absolute h-[2%] w-[15%] bg-black left-[64%] rotate-45 top-[40%]"></div>
              )}
              {/*Right hand*/}
              {wrongLetters.length >= 12 && (
                <div className="absolute h-[2%] w-[15%] bg-black left-[74%] -rotate-45 top-[40%]"></div>
              )}
              {/*left leg*/}
              {wrongLetters.length >= 15 && (
                <div className="absolute h-[2%] w-[15%] bg-black left-[64%] -rotate-45 top-[72%] md:top-[76%]  lg:top-[71%]"></div>
              )}
              {/*Right leg*/}
              {wrongLetters.length >= 18 && (
                <div className="absolute h-[2%] w-[15%] bg-black left-[74%] rotate-45 top-[72%] md:top-[76%] lg:top-[71%]"></div>
              )}

              <div className="absolute h-[15%] w-[2%] bg-black left-[75%] top-0"></div>

              {/*Body*/}
              {wrongLetters.length >= 6 && (
                <div className="absolute h-[30%] w-[1%] bg-black left-[76%] top-[35%]"></div>
              )}

              {/*Head*/}
              {wrongLetters.length >= 3 && (
                <div className="absolute h-[20%] lg:w-[13%] w-[10%] md:w-[8%] md:left-[72%] lg:left-[70%] rounded-full border-2 border-black left-[71%] top-[15%]"></div>
              )}

              <div className="w-[2%] h-full bg-black"></div>
            </div>

            <div className="w-[40%] h-[3%] bg-black mb-2"></div>
          </div>

          {/* FIXED BOX LENGTH HERE */}
          <div className="border-black w-[95%] h-[20%] py-1 flex justify-around items-end">
            {Array.from({ length: wordToGuess.length }).map((_, i) => (
              <div
                key={i}
                className="w-[8%] border-b-4 h-full flex justify-center items-center border-black"
              >
                {chars.includes(wordToGuess.charAt(i)) && wordToGuess.charAt(i)}
              </div>
            ))}
          </div>

          <div
            className="flex border border-black justify-center items-center space-x-1 rounded-lg bg-black text-yellow-400 p-1 absolute -top-1 -right-1 cursor-pointer transition-all transform duration-300 ease-in-out hover:text-yellow-600 hover:scale-105 z-50"
            onClick={() => {
              setGameStatus(false);
              setGameOver(false);
              setFirstGame(false);
              const newWord = words[Math.floor(Math.random() * words.length)];
              setWordToGuess(newWord);
              setWinner(false);
              onExit();
            }}
          >
            <div className="text-[30%]">Exit Game</div>
            <IoExit size={20}></IoExit>
          </div>
          {gameOver && (
            <div className="bg-black w-full flex z-50 justify-center items-center p-4 py-8 absolute top-[32%] outline outline-black text-red-800 tracking-tight flex-col">
              <div className="flex justify-center items-center">GameOver <FaSkull className="mx-2 text-red-400 animate-pulse text-3xl"></FaSkull></div>
              <div className="text-sm text-purple-900 tracking-wider mt-2">({wordToGuess})</div>
            </div>
          )}
          {gameOver && (
            <div className="absolute bg-red-400 w-full h-full top-0 outline outline-black rounded-2xl opacity-55 z-40"></div>
          )}
          {winner && (
            <div className="bg-black w-full flex z-50 justify-center items-center p-4 py-8 absolute top-[32%] outline outline-black text-green-600 tracking-tight flex-col">
              <div className="flex justify-center items-center">Winner <FaTrophy className="mx-2 text-purple-200 animate-pulse text-3xl"></FaTrophy></div>
              <div className="text-sm text-purple-900 tracking-wider mt-2">({wordToGuess})</div>
            </div>
          )}
          {winner && (
            <div className="absolute bg-green-400 w-full h-full top-0 outline outline-green-800 rounded-2xl opacity-75 z-40"></div>
          )}
          <div className="-top-1 -left-1 text-[30%] p-2 py-1 px-6 text-purple-400 rounded-xl absolute bg-black">
            chances left : {18-wrongLetters.length}
          </div>
        </div>
      ) : (
        <>
          Hangman! <GiHangingSpider className="animate-pulse"></GiHangingSpider>
          {firstGame ? (
            <div
              className="btn-sm btn px-8 my-4"
              onClick={() => {
                setGameStatus(true);
                setPrevWord(wordToGuess);
              }}
            >
              Start Game!
            </div>
          ) : (
            <div
              className="btn-sm btn px-8 my-4"
              onClick={() => {
                setGameStatus(true);
                setPrevWord(wordToGuess);
              }}
            >
              Start New Game!
            </div>
          )}
          {firstGame ? (
            <div></div>
          ) : (
            <div className="border relative px-4 bg-black flex mt-4 justify-center items-center space-x-1">
              <div className="text-[50%] text-purple-500 mx-1">{title}</div>
              <div
                className={`${
                  result == "WIN" ? "text-green-600" : "text-red-600"
                } text-sm`}
              >
                {result}
              </div>
              <div className="mx-1 text-yellow-700 text-[40%]">
                ({prevWord})
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GameBox;
