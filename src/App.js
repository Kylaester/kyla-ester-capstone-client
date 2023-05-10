import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import Lessons from "./Pages/Lessons.js";
import Leason1 from "./Pages/Leason1/Leason1.js";
import LogIn from "./Pages/LogIn/LogIn.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import React from "react";
import TwoLesson from "./Components/TwoLesson/TwoLesson.js";
import Background from "./Components/Background/Background.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/Leason1" element={<Leason1 />} />
        <Route path="/Learn-1" element={<TwoLesson />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Background />
    </BrowserRouter>
  );
}

export default App;
