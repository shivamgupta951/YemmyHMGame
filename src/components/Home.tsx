import Loader from "./Loader";
import Video from "./video";
import image from "../assets/image.png";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row justify-around items-center">
      <div className="hidden lg:flex rounded-md shadow-lg shadow-orange-400 from-black via-black to-purple-950 w-[50%] mt-14 py-20 bg-gradient-to-br items-center justify-center">
      <Video/>
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
      <div className="flex shadow-lg rounded-md shadow-orange-400 from-black via-black to-purple-950 w-[80%] mt-14 p-12 py-16 bg-gradient-to-br items-center justify-center lg:hidden">
        <Video/>
      </div>
    </div>
  );
};

export default Home;
