import React, { useState, useEffect } from "react";
import TravelService from "../../service/TravelService";
import Travel from "./Travel";

const TravelList = () => {
  const [loading, setLoading] = useState(true);
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    const getTravelData = async () => {
      setLoading(true);

      try {
        const response = await TravelService.getAllTravels();
        setTravels(response.data.content);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getTravelData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="flex shadow border-b">
        <table className="table-bottom min-w-full mb-16">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Travel duration
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Transport type
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Number of nights
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Departure day
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Destination
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {travels.map((travel) => (
                <Travel travel={travel} key={travel.id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default TravelList;
