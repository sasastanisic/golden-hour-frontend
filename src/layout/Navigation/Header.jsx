import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-700">
      <div className="h-16 py-10 px-12 flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          Golden Hour
        </Link>
        <div className="flex items-center space-x-14">
          <Link
            to="/destination"
            className="text-white font-semibold uppercase tracking-wide"
          >
            Destinations
          </Link>
          <Link
            //to="/travel"
            className="text-white font-semibold uppercase tracking-wide"
          >
            Travel
          </Link>
          <Link
            to="/register"
            className="text-white font-semibold uppercase tracking-wide"
          >
            Registration
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
