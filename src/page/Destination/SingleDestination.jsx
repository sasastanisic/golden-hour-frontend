import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DestinationService from "../../service/DestinationService";

const SingleDestination = () => {
  const { id } = useParams();

  const [destination, setDestination] = useState({});

  useEffect(() => {
    const getDestinationData = async () => {
      try {
        const response = await DestinationService.getDestinationById(id);
        setDestination(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDestinationData();
  }, [id]);

  const { place, country, population, description, pictureUrl } = destination;

  return (
    <div className="container mx-auto my-8">
      <div className="flex px-5 py-8">
        <div className="w-1/2">
          <img className="w-full" src={pictureUrl} alt={place} />
        </div>
        <div className="w-1/2 px-8">
          <h2 className="text-3xl font-semibold mb-4">{place}</h2>
          <div className="text-lg mb-4">
            <p>
              <b>Country:</b> {country}
            </p>
            <p>
              <b>Population:</b> {population}
            </p>
          </div>
          <p>{description}</p>
          <div className="mt-8">
            <Link
              to={`/destination`}
              className="mt-4 rounded text-white font-semibold bg-amber-400 hover:bg-amber-600 py-2 px-6 transition duration-300 ease-in-out"
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDestination;
