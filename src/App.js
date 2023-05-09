import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import Lessons from "./Pages/Lessons.js";
import Learn from "./Pages/Learn/Learn.js";
import React from "react";
import TwoLesson from "./Components/TwoLesson/TwoLesson.js";
import OneLesson from "./Components/OneLesson/OneLesson.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/Learn" element={<Learn />} />
        <Route path="/Learn-1" element={<TwoLesson />} />
        <Route path="/Learn-2" element={<OneLesson />} />
        {/* <Route path="/" element={<WarehouseList />} />
    <Route
      path="/warehouse/:warehouse_name"
      element={<WarehouseDetails />}
    />
    <Route path="/warehouse/:id" element={<WarehouseInventoryList />} />
    <Route path="/deleteWarehouse" element={<DeleteWarehouse />}></Route>
    <Route
      path="/deleteInventoryItem"
      element={<DeleteInventoryItem />}
    ></Route>
    <Route path="/EditWarehouse" element={<EditWarehouse />}></Route>
    <Route path="/addNewWarehouse" element={<AddNewWarehouse />}></Route>
    <Route path="/inventory" element={<InventoryPage />}></Route>
    <Route path="/inventory/:id" element={<InventoryDetails />}></Route>
    <Route path="/inventory/new" element={<AddNewInventoryItem />} />
    
    <Route path="/AddNewWarehouse" element={<AddNewWarehouse />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
