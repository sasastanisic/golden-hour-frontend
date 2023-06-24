import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import Registration from "./page/Registration";
import DestinationList from "./page/Destination/DestinationList";
import SingleDestination from "./page/Destination/SingleDestination";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/destination" element={<DestinationList />} />
        <Route path="/destination/:id" element={<SingleDestination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
