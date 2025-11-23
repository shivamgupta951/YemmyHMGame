type KeyboardButtonProps = {
  letter: string;
  onClick: (letter: string) => void;
  gameStatus: boolean;
  setGameStatus: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  winner: boolean;
  setWinner: React.Dispatch<React.SetStateAction<boolean>>;
};

const KeyboardButton = ({
  letter,
  onClick,
  gameStatus,
  setGameStatus,
  gameOver,
  setGameOver,
  winner,
  setWinner
}: KeyboardButtonProps) => {
  return (
    <button
      className={`
    border 
    w-[18%] h-[50px]       /* mobile: bigger keys */
    sm:w-[15%] sm:h-[55px]
    md:w-[11%] md:h-[80px]
    lg:size-[11%] lg:h-[33%]  /* only apply tiny size on large screens */
    rounded-xl bg-gradient-to-tr
    flex justify-center items-center 
    transition-all transform duration-300 
    ease-in-out hover:scale-95 cursor-pointer 
    ${gameStatus? "":"cursor-not-allowed opacity-60"} ${gameOver? "opacity-30":""} ${winner? "opacity-30":""}
  `}
      onClick={() => onClick(letter.toLowerCase())}
      disabled={!gameStatus || gameOver || winner}
    >
      {letter}
    </button>
  );
};

export default KeyboardButton;
