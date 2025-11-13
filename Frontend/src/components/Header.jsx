import ProgressBar from "./ProgressBar";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="w-full navbar max-h-[7vh] flex flex-1 justify-evenly items-center ">
      <ProgressBar />
      <div className=" flex items-center gap-2 ">
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
        <div>
          <div className="text-sm font-semibold">Kendrick</div>
          <div className="text-xs text-gray-500">Level 3 • 132 XP</div>
        </div>
      </div>
    </div>
  );
};

export const FullHeader = () => {
  return (
    <div className="flex flex-row gap-10 ">
      <Link
        to={"/"}
        className="text-2xl font-bold glass py-1 px-5 rounded-4xl flex justify-center items-center"
      >
        L-Sit Coach
      </Link>
      <Header />
    </div>
  );
};

export default Header;
