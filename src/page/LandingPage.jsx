import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white h-1/2 w-full flex justify-center items-center">
          <img
            className="w-9/12 h-full object-cover"
            src="https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1323&q=80"
            alt="Landing page"
          />
        </div>
        <div className="bg-gray-100 w-full h-1/2 grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center mb-10 mt-10">
            <h2 className="text-2xl font-semibold mb-4">Visit destinations</h2>
            <p className="text-lg mb-8">
              Discover destinations around the world
            </p>
            <Link
              to="/destination"
              className="rounded text-white font-semibold bg-red-700 hover:bg-red-500 py-2 px-6 mb-4 transition duration-300 ease-in-out"
            >
              View destinations
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mb-10 mt-10">
            <h2 className="text-2xl font-semibold mb-4">Plan a trip</h2>
            <p className="text-lg mb-8">See details about each travel</p>
            <Link
              to="/travel"
              className="rounded text-white font-semibold bg-green-400 hover:bg-green-600 py-2 px-6 transition duration-300 ease-in-out"
            >
              Plan a trip
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
