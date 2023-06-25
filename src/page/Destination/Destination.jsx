import React from "react";
import { Link } from "react-router-dom";

const Destination = (props) => {
  return (
    <div className="max-w-sm ml-14 rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover"
        src={props.destination.pictureUrl}
        alt={props.destination.place}
      />
      <div className="px-6 py-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl mb-2">
            <b>{props.destination.place}</b>, {props.destination.country}
          </h3>
        </div>
        <div>
          <Link
            to={`/destination/${props.destination.id}`}
            className="rounded text-white font-semibold bg-red-700 hover:bg-red-500 py-2 px-6 transition duration-300 ease-in-out"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Destination;
