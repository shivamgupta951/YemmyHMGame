import Bar from "./Bar";
import { BiCookie, BiHome } from "react-icons/bi";
import YemmyHMGame_logo from "../assets/YemmyHMGame_logo.png";
import { motion } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";
import { Link, useLocation } from "react-router-dom";
import { PiLineSegmentsBold } from "react-icons/pi";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const activeNav = location.pathname === "/info" ? "info" : "home";
  const [navStatus, setNavStatus] = useState(false);

  // Prevent background scroll when nav is open
  useEffect(() => {
    if (navStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navStatus]);

  return (
    <>
      {/* Overlay for blur effect */}
      {navStatus && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setNavStatus(false)}
        ></div>
      )}

      {/* Navbar main */}
      <div className="bg-gradient-to-l from-black via-[#160c0c] to-[#020819] flex justify-between items-center h-16 w-full px-4 z-50 relative">
        {/* Logo Section */}
        <motion.div
          animate={{ rotate: [0, 3, -3, 6, -6, 12, -12, 360, 0] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center space-x-2 outline-1 outline-pink-900 px-2 outline rounded-md p-1 bg-base-300"
        >
          <div className="size-5 rounded-lg bg-primary/10 flex items-center justify-center">
            <BiCookie className="w-5 h-5 text-primary" />
          </div>
          <div className="text-[60%] md:text-[80%] font-bold lg:text-sm text-yellow-400">
            YemmyHMGame
          </div>
          <img
            src={YemmyHMGame_logo}
            alt="logo"
            className="md:size-6 size-8 rounded-lg"
          />
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex p-[6px] space-x-8 border rounded-xl bg-red-950">
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

        {/* Desktop GitHub */}
        <a
          className="hidden md:flex space-x-2 items-center cursor-pointer"
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

        {/* Mobile menu button */}
        <div className="block relative border p-1 rounded-md bg-red-950 md:hidden">
          <PiLineSegmentsBold
            size={25}
            onClick={() => {
              setNavStatus(!navStatus);
            }}
          />
          {navStatus && (
            <div className="z-50 absolute bg-gradient-to-bl from-[#0f0000] via-[#1a0c0c] to-[#020819] h-[200px] w-[300px] top-14 rounded-xl -right-1 border flex justify-around flex-col items-center shadow-lg">
              <div>
                <Link
                  to="/"
                  className={`p-1 rounded-lg text-sm px-16 bg-gradient-to-r btn border-2 ${
                    activeNav === "home" ? "border-red-200" : ""
                  }`}
                  onClick={() => setNavStatus(false)}
                >
                  <BiHome size={18} /> Home
                </Link>
              </div>
              <div>
                <Link
                  to="/info"
                  className={`p-1 rounded-lg text-sm px-16 bg-gradient-to-r btn border-2 ${
                    activeNav === "info" ? "border-red-200" : ""
                  }`}
                  onClick={() => setNavStatus(false)}
                >
                  <BsInfoCircle size={16} /> Info
                </Link>
              </div>
              <div>
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
            </div>
          )}
        </div>
      </div>

      <Bar />
    </>
  );
};

export default Navbar;
