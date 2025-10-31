import Bar from "./Bar";
import { BiCookie, BiHome } from "react-icons/bi";
import YemmyHMGame_logo from "../assets/YemmyHMGame_logo.png";
import { motion } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const activeNav = location.pathname === "/info" ? "info" : "home";

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
          <div className="md:text-[80%] font-bold lg:text-lg text-yellow-400">
            YemmyHMGame
          </div>
          <img
            src={YemmyHMGame_logo}
            alt="logo"
            className="md:size-6 size-8 rounded-lg"
          />
        </motion.div>

        <div className="flex p-[6px] space-x-8 border rounded-xl bg-red-950">
          <Link
            to="/"
            className={`p-1 rounded-lg text-sm px-6 bg-gradient-to-r btn border-2 ${
              activeNav === "home" ? "border-red-200" : ""
            }`}
          >
            <BiHome size={18} /> Home
          </Link>

          <Link
            to="/info"
            className={`p-1 rounded-lg text-sm px-6 bg-gradient-to-r btn border-2 ${
              activeNav === "info" ? "border-red-200" : ""
            }`}
          >
            <BsInfoCircle size={16} /> Info
          </Link>
        </div>

        <a
          className="flex space-x-2 items-center cursor-pointer"
          href="https://github.com/shivamgupta951"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-1 border bg-red-200 rounded-md animate-bounce">
            <DiGithubBadge size={28} className="bg-black" />
          </div>
          <div className="outline-1 outline p-1 rounded-lg outline-red-200 text-blue-100 shadow-white shadow-md">
            @shivamgupta951
          </div>
        </a>
      </div>
      <Bar />
    </>
  );
};

export default Navbar;
