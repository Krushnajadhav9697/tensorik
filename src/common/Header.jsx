import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Tensorik logo.png";

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 bg-[#25292e] shadow-sm">
      <div className="container mx-auto flex justify-start items-center">
        <Link to="/" className="block w-32 md:w-40 h-auto">
          <img
            src={logo}
            alt="Tensorik Logo - Learn AI Together"
            className="h-auto"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
