import Loader from "./Loader";
import Video from "./video";
import image from "../assets/image.png";
import { motion } from "framer-motion";
import { FaGamepad } from "react-icons/fa";
import { TbDeviceGamepad3Filled } from "react-icons/tb";
import { BiCookie } from "react-icons/bi";
import GameSection from "./GameSection";

const Home = () => {
  return (
    <div className="pb-10 w-full min-h-[1800px] lg:min-h-[1550px]">
      <div className="flex flex-col w-full lg:flex-row justify-around items-center">
        <div className="hidden lg:flex rounded-full shadow-lg shadow-orange-400 from-black via-black to-[#320521] w-[50%] mt-14 py-10 bg-gradient-to-br items-center justify-center flex-col pb-16">
          <div className="my-6 text-lg font-bold text-purple-800">
            Play For Win , Win To Play!
          </div>
          <Video />
        </div>
        <div className="flex justify-center items-center flex-col space-y-12 relative w-[70%] lg:w-[30%]">
          <div className="top-0 -right-2 absolute">
            <Loader />
          </div>
          <div className="border flex flex-col justify-center items-center p-1 bg-black py-10 space-y-8 w-[100%] rounded-lg">
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
        <div className="flex shadow-lg rounded-full shadow-orange-400 from-black via-black to-[#320521] w-[80%] mt-14 p-12 py-20 pt-14 bg-gradient-to-br items-center justify-center flex-col lg:hidden">
          <div className="my-6 text-lg font-bold text-purple-800">
            Play For Win , Win To Play!
          </div>

          <Video />
        </div>
      </div>
      <div className="mt-16 flex justify-center items-center text-lg text-transparent bg-gradient-to-r bg-clip-text from-black via-orange-900 to-red-900">
        <TbDeviceGamepad3Filled className="animate-slow-spin text-red-800 mx-1 text-xl"></TbDeviceGamepad3Filled>
        Scroll Down For Game Section!
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 2,
          duration: 4,
        }}
        className="text-center mt-32 text-gray-400 text-xl flex flex-col justify-center items-center pb-48"
      >
        <h2 className="text-2xl flex justify-center items-center my-7 text-yellow-700 font-bold tracking-wider underline shadow-xl shadow-black w-[80%]">
          <BiCookie className="mx-2 text-primary"></BiCookie> YemmyHMGame{" "}
          <FaGamepad className="mx-3 animate-slow-spin"></FaGamepad>
        </h2>
        <p className="text-xl w-[50%] bg-clip-text bg-gradient-to-r from-purple-800 via-orange-700 to-red-900 text-transparent">
          Test your vocabulary, sharpen your thinking, and have fun at the same
          time! Every word is a new challenge—can you guess it before the game
          ends?
        </p>

        <p className="text-sm mt-7">
          Crafted with ❤️ by{" "}
          <span className="text-primary font-semibold">Shivam Gupta</span>—
          Powered by Yemmy Foundation
        </p>
        <p className="mt-1 text-sm text-gray-500">
          © {new Date().getFullYear()} YemmyHMGame. All rights reserved.
        </p>
      </motion.div>
      <div className="border-b-2 border-dashed border-red-400"></div>
      <div className="min-h-[700px] flex justify-center items-center flex-col"><GameSection/></div>
    </div>
  );
};
export default Home;
