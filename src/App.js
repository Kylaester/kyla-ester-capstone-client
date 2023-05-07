import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import React from "react";
import Header from "./Components/Header/Header.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
