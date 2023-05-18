import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Lessons from "./Pages/Lessons.js";
import Leason1 from "./Pages/Leason1/Leason1.js";
import Lesson2 from "./Pages/Lesson2/Lesson2.js";
import Lesson3 from "./Pages/Lesson3/Lesson3.js";
import Lesson4 from "./Pages/Lesson4/Lesson4.js";
import Lesson5 from "./Pages/Lesson5/Lesson5.js";
import Lesson6 from "./Pages/Lesson6/Lesson6.js";
import Lesson7 from "./Pages/Lesson7/Lesson7.js";
import Settings from "./Pages/Settings/Settings.js";
import Complete1 from "./Pages/Basics1Complete/Complete1.js";
import LogIn from "./Pages/LogIn/LogIn.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import React from "react";
import TwoLesson from "./Components/TwoLesson/TwoLesson.js";
import Notif from "./Components/NeedHelp copy/Notif.js";
import Start from "./Pages/Start/Start.js";
import ProgressPage from "./Pages/ProgressPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Start />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/Leason1" element={<Leason1 />} />
        <Route path="/Lesson2" element={<Lesson2 />} />
        <Route path="/Lesson3" element={<Lesson3 />} />
        <Route path="/Lesson4" element={<Lesson4 />} />
        <Route path="/Lesson5" element={<Lesson5 />} />
        <Route path="/Lesson6" element={<Lesson6 />} />
        <Route path="/Lesson7" element={<Lesson7 />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Complete1" element={<Complete1 />} />
        <Route path="/Learn-1" element={<TwoLesson />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Progress" element={<ProgressPage />} />
        <Route path="/modal" element={<Notif />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
