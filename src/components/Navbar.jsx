import { Link } from "react-router-dom";
import { basket, logo, close, menu } from "../assets";
import { useState } from "react";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex gap-12 sm:justify-between items-center pl-8 pr-8 pb-4 pt-4 sm:pl-14 sm:pr-14 sm:pb-5 sm:pt-5">
      <img
        src={logo}
        alt="Logo"
        className="w-[124px] h-[32px] object-contain"
      />
      <div className="sm:flex hidden justify-center items-center gap-8">
        <Link
          to="/Home"
          className=" font-poppins font-medium text-sm text-primary "
        >
          Home
        </Link>
        <Link
          to="/Men"
          className="font-poppins font-medium text-sm text-primary"
        >
          Men
        </Link>
        <Link
          to="/Women"
          className="font-poppins font-medium text-sm text-primary"
        >
          Women
        </Link>
        <Link
          to="/Contact"
          className="font-poppins font-medium text-sm text-primary"
        >
          Contact us
        </Link>
      </div>
      <Link to="/Basket">
        <div className=" flex gap-2 justify-center items-center">
          <img src={basket} alt="Basket" />
          <p className="font-poppins text-base text-primary">3</p>
        </div>
      </Link>
      <div className="sm:hidden flex flex-1 justify-center items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-secondary border-solid border-[1px] border-border absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-md sidebar`}
        >
          <div className="flex flex-col justify-end items-start gap-4 flex-1">
            <Link
              to="/Home"
              className=" font-poppins font-medium text-sm text-primary "
            >
              Home
            </Link>
            <Link
              to="/Men"
              className="font-poppins font-medium text-sm text-primary"
            >
              Men
            </Link>
            <Link
              to="/Women"
              className="font-poppins font-medium text-sm text-primary"
            >
              Women
            </Link>
            <Link
              to="/Contact"
              className="font-poppins font-medium text-sm text-primary"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
