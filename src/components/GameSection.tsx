import { useState } from "react";
import words from "../wordList.json";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGamepad } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa6";


const GameSection = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [boxStatus, setBoxStatus] = useState(() => {
    return Math.floor(Math.random() * 10);
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setBoxStatus(Math.floor(Math.random() * 10));
    }, 1000); // change every 1s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[950px] border-b-2 border-dashed border-red-400 flex justify-center">
      {/* 
        Keyboard ,UI and for 
        small devices game
        section!
      */}
      <div className="w-[45%] flex justify-start pt-20 items-center py-10 flex-col">
        <div className="flex justify-center items-center w-[50%] text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-primary font-bold">
          Game Zone <FaGamepad className="text-purple-500 mx-2 text-3xl mt-1"></FaGamepad>
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
          ></div>
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
      <div className="min-h-[50%] w-[4px] bg-gradient-to-b from-primary via-black to-purple-900 border-dashed mb-[20%] mt-[3%]"></div>
      <div className="w-[55%] flex bg-gradient-to-tr pt-10 justify-start items-center flex-col from-black via-[#1f0303] to-black space-y-8">
        <div className="size-[45%] w-[50%] h-[40%] border rounded-2xl bg-orange-300"></div>
        <div className="relative size-[45%] w-[80%] h-[30%] border bg-black">
          <div className="absolute right-0 flex justify-center items-center -top-6 text-sm text-yellow-500">Use This Keyboard! <FaKeyboard className="mx-1 text-xl"></FaKeyboard></div>
        </div>
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
    </div>
  );
};

export default GameSection;
