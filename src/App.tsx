import { useState } from "react";
import words from "./wordList.json";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import image from "./assets/image.png";
import { motion } from "framer-motion";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  return (
    <div className="min-h-screen flex flex-col bg-[#150303]">
      <Navbar />
      <div className="flex justify-around mt-28">
        <div className="border">
          <div>{wordToGuess}</div>
          <div className="card w-96 bg-base-100 shadow-xl mt-20">
            <div className="card-body items-center text-center ">
              <div>
                <h2 className="card-title text-primary text-2xl">Hello</h2>
                <p className="text-lg"></p>
              </div>
              <div className="card-actions mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Click Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col space-y-12 relative">
          <div className="top-0 -right-2 absolute"><Loader /></div>
          <div className="border flex justify-center items-center p-2 bg-black py-10 rounded-lg">
            <motion.img
              animate={{ rotate: [0, 6, -6, 12, -12, 6 , -6 , 3 , -3 , 0] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "easeInOut",
              }}
              src={image}
              alt="logo"
              className="w-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
