import { FaPlay } from "react-icons/fa";

const PlayButton: React.FC = () => {
  return (
    <button
      className="
    transition-all
    opacity-0
    bg-green-500
    text-black
    p-6
    rounded-full
    drop-shadow-md
    translate
    translate-y-1/4
    group-hover:translate-y-0
    group-hover:opacity-100
    hover:scale-110
    "
    >
      <FaPlay />
    </button>
  );
};

export default PlayButton;
