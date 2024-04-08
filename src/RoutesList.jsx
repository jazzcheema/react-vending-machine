import React from "react";
import { Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";

/** All routes for Vending Machine app. */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/soda" element={<Soda />} />
      <Route path="/candy" element={<Candy />} />
    </Routes>
  );
}

export default RoutesList;
