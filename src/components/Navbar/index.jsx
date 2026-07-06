import { Link } from "react-router";

import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoAddCircleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="NavBar max-w-300 w-[90%] m-5 px-6 py-3 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center rounded-2xl fixed top-0 bg-[#ccc]">
      <Link to={"/"} className="text-4xl font-bold">
        Do It
      </Link>
      <div className="flex gap-5 font-bold">
        <div className="flex gap-2 items-center">
          <GoHomeFill />
          <Link to={"/"}>Home</Link>
        </div>
        <div className="flex gap-2 items-center">
          <IoLogIn />
          <Link to={"/login"}>Login</Link>
        </div>
        <div className="flex gap-2 items-center">
          <IoAddCircleSharp />
          <Link to={"/signup"}>SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
