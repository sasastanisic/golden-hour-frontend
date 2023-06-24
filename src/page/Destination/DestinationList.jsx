import React, { useState, useEffect } from "react";
import Destination from "./Destination";
import DestinationService from "../../service/DestinationService";

const DestinationList = () => {
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const getDestinationData = async () => {
      setLoading(true);

      try {
        const response = await DestinationService.getAllDestinations();
        setDestinations(response.data.content);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getDestinationData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-3 gap-4">
        {!loading &&
          destinations.map((destination) => (
            <Destination destination={destination} key={destination.id} />
          ))}
      </div>
    </div>
  );
};

export default DestinationList;
