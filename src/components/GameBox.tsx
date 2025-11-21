import React from "react";
import { GiHangingSpider } from "react-icons/gi";
import words from "../wordList.json";
import { useState } from "react";
import { IoExit } from "react-icons/io5";

type input = {
  title: string;
  chars: string[];
  onExit: () => void;
  gameStatus: boolean;
  setGameStatus: React.Dispatch<React.SetStateAction<boolean>>;
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
              {wrongLetters.length >= 6 && (
                <div className="absolute h-[2%] w-[15%] bg-black left-[64%] rotate-45 top-[40%]"></div>
              )}
              {/*Right hand*/}
              {wrongLetters.length >= 8 && (
                <div className="absolute h-[2%] w-[15%] bg-black left-[74%] -rotate-45 top-[40%]"></div>
              )}
              {/*left leg*/}
              {wrongLetters.length >= 10 && (
                <div className="absolute h-[2%] w-[15%] bg-black left-[64%] -rotate-45 top-[72%] md:top-[76%]  lg:top-[71%]"></div>
              )}
              {/*Right leg*/}
              {wrongLetters.length >= 12 && (
                <div className="absolute h-[2%] w-[15%] bg-black left-[74%] rotate-45 top-[72%] md:top-[76%] lg:top-[71%]"></div>
              )}

              <div className="absolute h-[15%] w-[2%] bg-black left-[75%] top-0"></div>

              {/*Body*/}
              {wrongLetters.length >= 4 && (
                <div className="absolute h-[30%] w-[1%] bg-black left-[76%] top-[35%]"></div>
              )}

              {/*Head*/}
              {wrongLetters.length >= 2 && (
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
                {chars.includes(wordToGuess.charAt(i)) &&
                  wordToGuess.charAt(i)}
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
              onExit();
            }}
          >
            <div className="text-[30%]">Exit Game</div>
            <IoExit size={20}></IoExit>
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
