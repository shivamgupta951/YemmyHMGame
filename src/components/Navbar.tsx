import React from "react";
import Bar from "./Bar";
import { BiCookie, BiHome, BiInfoSquare } from "react-icons/bi";
import YemmyHMGame_logo from "../assets/YemmyHMGame_logo.png";
import { motion } from "framer-motion";
import { BsGithub, BsInfoCircle } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-l from-black via-[#160c0c] to-[#020819] flex justify-between items-center h-16 w-full px-4">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center space-x-2 outline-1 outline-pink-900 px-2 outline rounded-md p-1 bg-base-300"
        >
          <div className="size-5 rounded-lg bg-primary/10 flex items-center justify-center">
            <BiCookie className="w-5 h-5 text-primary" />
          </div>
          <div className="md:text-[80%] font-bold lg:text-lg text-yellow-400">YemmyHMGame</div>
          <img
            src={YemmyHMGame_logo}
            alt="logo"
            className="md:size-6 size-8 rounded-lg"
          />
        </motion.div>
        <div className="flex p-2 space-x-8">
          <div className="hover:border-red-200 p-1 rounded-lg text-sm px-7 bg-gradient-to-r btn border-2 border-red-800">
            <BiHome size={18}></BiHome> Home
          </div>
          <div className="hover:border-red-200 p-1 rounded-lg text-sm px-7 bg-gradient-to-r btn border-2 border-red-800">
            <BsInfoCircle size={16}></BsInfoCircle> Info
          </div>
        </div>
        <div className="flex space-x-2 items-center cursor-pointer">
          <div className="p-1 border bg-red-200 rounded-md animate-bounce">
            <DiGithubBadge size={28} className="bg-black"></DiGithubBadge>
          </div>
          <div className="outline-1 outline p-1 rounded-lg outline-red-200 text-blue-100 shadow-white shadow-md">@shivamgupta951</div>
        </div>
      </div>
      <Bar />
    </>
  );
};

export default Navbar;
