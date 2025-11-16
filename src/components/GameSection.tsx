import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGamepad } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa6";
import { GiPanda } from "react-icons/gi";
import GameBox from "./GameBox";

const GameSection = () => {
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
    <div className="w-full min-h-[950px] border-b-2 border-dashed border-red-400 lg:flex justify-center">
      <div className="hidden lg:flex w-[45%] justify-start pt-20 items-center py-10 flex-col">
        <div className="flex justify-center items-center w-[50%] text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-primary font-bold">
          Game Zone{" "}
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
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] ${
              boxStatus == 0 ? "animate-ping-slow" : ""
            }`}
          ></div>
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] ${
              boxStatus == 1 ? "animate-ping-slow" : ""
            }`}
          ></div>
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] ${
              boxStatus == 2 ? "animate-ping-slow" : ""
            }`}
          ></div>
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] ${
              boxStatus == 3 ? "animate-ping-slow" : ""
            }`}
          ></div>
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] ${
              boxStatus == 4 ? "animate-ping-slow" : ""
            }`}
          ></div>
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] ${
              boxStatus == 5 ? "animate-ping-slow" : ""
            }`}
          ></div>
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] ${
              boxStatus == 6 ? "animate-ping-slow" : ""
            }`}
          ></div>
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] ${
              boxStatus == 7 ? "animate-ping-slow" : ""
            }`}
          ></div>
          <div
            className={`border size-[30%] flex justify-center items-center text-black rounded-md bg-[#decdcd] ${
              boxStatus == 8 ? "animate-ping-slow" : ""
            } ${boxStatus == 9 ? "animate-ping-slow" : ""}`}
          ></div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center">
        <div className="lg:hidden h-[8px] min-h-[50%] w-[80%] bg-gradient-to-b from-primary via-black to-purple-900 border-dashed mb-[4%] mt-[15%]"></div>
      </div>
      <div className="hidden lg:block min-h-[50%] w-[6px] bg-gradient-to-b from-primary via-black to-purple-900 border-dashed mb-[20%] mt-[3%]"></div>
      <div className="pb-20 lg:pb-0 w-[100%] lg:w-[55%] flex bg-gradient-to-tr pt-10 justify-start items-center flex-col from-black via-[#1f0303] to-black space-y-8">
        <GameBox/>
        <div className="w-[60%] relative transition-all transform duration-300 ease-in-out hover:shadow-white shadow-md hover:scale-105 flex size-[45%] lg:w-[80%] justify-center p-2 h-[30%] border bg-black flex-wrap">
          <div className="absolute right-0 flex justify-center items-center -top-6 text-sm text-yellow-500">
            Use This Keyboard!{" "}
            <FaKeyboard className="mx-1 text-xl"></FaKeyboard>
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            A
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            B
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            C
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            D
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            E
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            F
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            G
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            H
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            I
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            J
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            K
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            L
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            M
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            N
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            O
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            P
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            Q
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            R
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            S
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            T
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            U
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            V
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            W
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            X
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            Y
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            Z
          </div>
          <div className="border size-[11%] h-[33%] rounded-xl bg-gradient-to-tr flex justify-center items-center transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer">
            <GiPanda className="text-2xl animate-bounce"></GiPanda>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
