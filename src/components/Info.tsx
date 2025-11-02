import { motion } from "framer-motion";
import hangmanImg from "../assets/image.png";
import Yemmy_logo from "../assets/YemmyHMGame_logo.png";
import { BiCookie } from "react-icons/bi";

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white px-6 pb-12 w-full space-y-12">
      {/* Title Section */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="flex justify-center items-center mb-4">
          <img
            src={Yemmy_logo}
            alt="Hangman illustration"
            className="w-28 md:w-36 rounded-2xl shadow-xl border border-primary/40"
          />
        </div>
        <h1 className="text-xl md:text-4xl font-extrabold text-yellow-800 drop-shadow-lg flex justify-center items-center">
          Welcome to YemmyHMGame <BiCookie></BiCookie>
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          The thrilling Hangman-style word guessing game — powered by fun,
          skill, and a touch of danger! Guess letters wisely before the man
          meets his fate.
        </p>
      </motion.div>

      {/* Image & Text Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24"
      >
        <img
          src={hangmanImg}
          alt="Hangman illustration"
          className="w-72 md:w-96 rounded-2xl shadow-xl border border-primary/40"
        />

        <div className="max-w-lg text-gray-200 space-y-6 leading-relaxed p-6 rounded-2xl shadow-lg border border-primary/30 bg-gradient-to-br from-black via-black to-red-950">
          <h2 className="text-2xl font-bold text-primary">How to Play</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Start the game and a random word will be chosen for you.</li>
            <li>Guess letters one by one to reveal the hidden word.</li>
            <li>Every wrong guess brings the Hangman closer to his doom!</li>
            <li>
              Win the game by guessing the word before time (or the man) runs
              out.
            </li>
          </ul>
          <p className="text-yellow-400 font-semibold">
            💡 Tip: Choose your letters wisely — and trust your instincts!
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl w-full"
      >
        {[
          {
            title: "🎮 Simple Yet Addictive",
            desc: "Quick to learn, fun to master — play endlessly without getting bored!",
          },
          {
            title: "🎨 Dynamic Animations",
            desc: "Smooth transitions powered by Framer Motion for an immersive experience.",
          },
          {
            title: "⚡ Lightning Fast",
            desc: "Built with React + Tailwind + DaisyUI for instant, snappy gameplay.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-base-200/40 border border-primary/30 rounded-2xl p-6 text-center shadow-md hover:shadow-primary/30 transition-all"
          >
            <h3 className="text-xl font-bold text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mt-16 text-gray-400 text-sm"
      >
        <p>
          Crafted with ❤️ by{" "}
          <span className="text-primary font-semibold">Shivam Gupta</span>—
          Powered by Yemmy Foundation
        </p>
        <p className="mt-2 text-xs text-gray-500">
          © {new Date().getFullYear()} YemmyHMGame. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Info;
