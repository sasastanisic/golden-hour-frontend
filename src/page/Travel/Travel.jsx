import React from "react";

const Travel = (props) => {
  const { travel } = props;
  const departureDate = new Date(
    travel.departureDay[0],
    travel.departureDay[1] - 1,
    travel.departureDay[2]
  );
  const destination = travel.destination;

  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{travel.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{travel.travelDuration}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{travel.transportType}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{travel.numberOfNights}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {departureDate.toDateString()}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {destination.place}, {destination.country}
        </div>
      </td>
    </tr>
  );
};

export default Travel;
