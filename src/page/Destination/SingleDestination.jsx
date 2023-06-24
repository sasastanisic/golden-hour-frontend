import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DestinationService from "../../service/DestinationService";

const SingleDestination = () => {
  const { id } = useParams();
  //const navigate = useNavigate();

  const [destination, setDestination] = useState({
    id: id,
    place: "",
    country: "",
  });

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

  return <div>{destination.country}</div>;
};

export default SingleDestination;
