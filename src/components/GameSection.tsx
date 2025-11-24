import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGamepad } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa6";
import { GiPanda } from "react-icons/gi";
import GameBox from "./GameBox";
import KeyboardButton from "./KeyboardButton";
import words from "../wordList.json";

const GameSection = () => {
  const [boxStatus, setBoxStatus] = useState(() => {
    return Math.floor(Math.random() * 10);
  });
  const [result, setResult] = useState<string>("");
  useEffect(() => {
    const interval = setInterval(() => {
      setBoxStatus(Math.floor(Math.random() * 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [gameStatus, setGameStatus] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<boolean>(false);

  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // NEW: Track remaining letters of the word
  const [remainingWord, setRemainingWord] = useState<string>(wordToGuess);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  useEffect(() => {
    if (wrongLetters.length >= 18) {
      setGameOver(true);
      setResult("Lose");
    }
  }, [wrongLetters]);
  useEffect(() => {
    if (remainingWord.length == 0) {
      setWinner(true);
      setResult("Win");
    }
  }, [remainingWord]);

  return (
    <div className="w-full min-h-[950px] border-b-2 border-dashed border-red-400 lg:flex justify-center">
      <div className="hidden lg:flex w-[45%] justify-start pt-20 items-center py-10 flex-col">
        <div className="flex justify-center items-center w-[50%] text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-primary font-bold">
          Game Zone{" "}
          {/* use 2 wrong inputs-> 1 leg -
          > easy for hard use 1
          wrong -> 1 leg*/}
          <FaGamepad className="text-purple-500 mx-2 text-3xl mt-1"></FaGamepad>
        </div>
        <div className="border-2 w-[50%] border-blue-700 shadow-lg shadow-blue-400 min-h-4 rounded-md bg-black mb-28"></div>
        <motion.div
          animate={{ rotate: [0, 15, -15, 30, -30, 60, -60, 120, -120, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="border w-[50%] justify-between min-h-[42%] flex flex-wrap p-4 rounded-xl bg-gradient-to-br from-[#020727] via-black to-green-950"
        >
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
              boxStatus == 0 ? "animate-ping-slow" : ""
            }`}
          >
          </div>

          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
              boxStatus == 1 ? "animate-ping-slow" : ""
            }`}
          ></div>

          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
              boxStatus == 2 ? "animate-ping-slow" : ""
            }`}
          ></div>

          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
              boxStatus == 3 ? "animate-ping-slow" : ""
            }`}
          ></div>

          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
              boxStatus == 4 ? "animate-ping-slow" : ""
            }`}
          ></div>

          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
              boxStatus == 5 ? "animate-ping-slow" : ""
            }`}
          ></div>

          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
              boxStatus == 6 ? "animate-ping-slow" : ""
            }`}
          ></div>

          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
              boxStatus == 7 ? "animate-ping-slow" : ""
            }`}
          ></div>

          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
              boxStatus == 8 ? "animate-ping-slow" : ""
            } ${boxStatus == 9 ? "animate-ping-slow" : ""}`}
          ></div>
        </motion.div>
      </div>

      {/* MOBILE VERSION LEFT SIDE */}
      <div className="flex lg:hidden w-[100%] h-[750px] justify-start pt-20 items-center py-20 flex-col">
        <div className="flex justify-center items-center w-[50%] text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-primary font-bold">
          Game Zone{" "}
          <FaGamepad className="text-purple-500 mx-2 text-3xl mt-1"></FaGamepad>
        </div>
        <div className="border-2 w-[60%] border-blue-700 shadow-lg shadow-blue-400 min-h-4 rounded-md bg-black mb-28"></div>
        <motion.div
          animate={{ rotate: [0, 15, -15, 30, -30, 60, -60, 120, -120, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="border w-[50%] h-[50%] justify-between flex my-10 flex-wrap p-4 rounded-xl bg-gradient-to-br from-[#020727] via-black to-green-950"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
                boxStatus == i ? "animate-ping-slow" : ""
              }`}
            ></div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center items-center">
        <div className="lg:hidden h-[8px] min-h-[50%] w-[80%] bg-gradient-to-b from-primary via-black to-purple-900 border-dashed mb-[4%] mt-[15%]"></div>
      </div>

      <div className="hidden lg:block min-h-[50%] w-[6px] bg-gradient-to-b from-primary via-black to-purple-900 border-dashed mb-[20%] mt-[3%]"></div>

      {/* RIGHT SIDE */}
      <div className="pb-20 lg:pb-0 w-[100%] lg:w-[55%] flex bg-gradient-to-tr pt-10 justify-start items-center flex-col from-black via-[#1f0303] to-black space-y-8">
        <GameBox
          title={"Previous Result:"}
          chars={guessedLetters}
          onExit={() => {
            setGuessedLetters([]);
            setWrongLetters([]);
            const newWord = words[Math.floor(Math.random() * words.length)];
            setWordToGuess(newWord);
            setRemainingWord(newWord);
          }}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          gameOver={gameOver}
          setGameOver={setGameOver}
          wordToGuess={wordToGuess}
          wrongLetters={wrongLetters}
          setWrongLetters={setWrongLetters}
          winner={winner}
          setWinner={setWinner}
          result={result}
          setResult={setResult}
          setWordToGuess={(w) => {
            setWordToGuess(w);
            setRemainingWord(w);
          }}
        />

        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[80%] flex flex-wrap p-2 min-h-[250px] sm:min-h-[300px]lg:h-[30%] border bg-black relative hover:scale-105 duration-300 transition-all shadow-md justify-center hover:shadow-white">
          <div className="absolute right-0 -top-6 flex items-center text-sm text-yellow-500">
            Use This Keyboard! <FaKeyboard className="mx-1 text-xl" />
          </div>

          {alphabet.map((letter) => (
            <KeyboardButton
              key={letter}
              letter={letter}
              onClick={(l) => {
                if (guessedLetters.includes(l) || wrongLetters.includes(l)) {
                  // user clicked same letter again -> WRONG again!
                  setWrongLetters((prev) => [...prev, l]);
                  return;
                }

                if (remainingWord.includes(l)) {
                  // correct guess
                  setGuessedLetters((prev) => [...prev, l]);
                  setRemainingWord((prev) => prev.replaceAll(l, ""));
                } else {
                  // wrong guess
                  setWrongLetters((prev) => [...prev, l]);
                }
              }}
              gameStatus={gameStatus}
              setGameStatus={setGameStatus}
              gameOver={gameOver}
              setGameOver={setGameOver}
              winner={winner}
              setWinner={setWinner}
            />
          ))}

          {/* Panda */}
          <div
            className={`
              border 
              w-[18%] h-[50px]
              sm:w-[15%] sm:h-[55px]
              md:w-[12%] md:h-[80px]
              lg:size-[11%] lg:h-[33%]
              rounded-xl bg-gradient-to-tr
              flex justify-center items-center 
              transition-all transform duration-300 
              ease-in-out hover:scale-95 cursor-pointer
              ${gameOver ? "opacity-30" : ""}
              ${winner ? "opacity-30" : ""}
              ${gameStatus ? "" : "cursor-not-allowed opacity-60"}
              `}
          >
            <GiPanda className="text-2xl animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
