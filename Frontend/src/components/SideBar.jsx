import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className="hidden md:flex flex-col w-72 glass rounded-r-4xl  p-4">
      <Link to={"/"} className="mb-8 mx-auto">
        <div className="text-2xl font-bold">L-Sit Coach</div>
      </Link>

      <nav className="flex-1 space-y-1 text-base">
        <Link to={"/"} className="block py-2 px-3 rounded hover:bg-primary">
          Home
        </Link>
        <Link
          to={"preview"}
          className="block py-2 px-3 rounded hover:bg-primary"
        >
          Today's Plan
        </Link>
        <Link
          to={"achievements"}
          className="block py-2 px-3 rounded hover:bg-primary"
        >
          Achievements
        </Link>
      </nav>

      <div className="m-4 pt-4 ">
        <button className="w-full text-left py-2 px-3 text-sm text-info">
          Log out
        </button>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        <button className="flex flex-col items-center text-xs">Home</button>
        <button className="flex flex-col items-center text-xs">Today</button>
        <button className="flex flex-col items-center text-xs">Library</button>
        <button className="flex flex-col items-center text-xs">Profile</button>
      </div>
    </div>
  );
};

export default SideBar;
