import { TbError404 } from "react-icons/tb";
import { IoArrowBackSharp } from "react-icons/io5";

import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="errorPage min-h-dvh flex flex-col justify-center items-center">
      <TbError404 className="text-8xl" />
      <p className="text-6xl">Page Not Found</p>
      <div className="py-7 flex gap-4 items-center text-3xl text-blue-600 font-bold">
        <IoArrowBackSharp />
        <Link to={"/home"}>To Home Page</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
