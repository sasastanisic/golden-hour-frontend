import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import LandingPage from "./page/LandingPage";
import Registration from "./page/Registration";
import DestinationList from "./page/Destination/DestinationList";
import SingleDestination from "./page/Destination/SingleDestination";
import TravelList from "./page/Travel/TravelList";
import ErrorPage from "./page/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/destination" element={<DestinationList />} />
          <Route path="/destination/:id" element={<SingleDestination />} />
          <Route path="/travel" element={<TravelList />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
