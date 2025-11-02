import Loader from "./Loader";
import image from "../assets/image.png";
import { motion } from "framer-motion";
import { useState } from "react";
import words from "../wordList.json";

const Home = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  return (
    <div className="flex flex-col w-full lg:flex-row justify-around items-center">
      <div className="hidden lg:block border w-[50%] mt-14">
        <div>{wordToGuess}</div>
        <div className="card bg-base-100 shadow-xl mt-20">
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
      <div className="flex justify-center items-center flex-col space-y-12 relative">
        <div className="top-0 -right-2 absolute">
          <Loader />
        </div>
        <div className="border flex flex-col justify-center items-center p-1 bg-black py-10 space-y-8 rounded-lg">
          <motion.img
            animate={{ rotate: [0, 6, -6, 12, -12, 6, -6, 3, -3, 5, -5] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
            src={image}
            alt="logo"
            className="w-[60%]"
          />
          <div className="text-red-600 font-bold tracking-tighter outline-dashed p-1 px-2 outline-2">
            PLAY AT YOUR OWN RISK!
          </div>
        </div>
      </div>
      <div className="block border w-[50%] mt-12 lg:hidden">
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

export default Home;
