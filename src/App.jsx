import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ComfyStore from "./pages/ComfyStore";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="container max-w-[1400px] ">
      <header className=" flex items-center justify-center  ">
        <NavLink
          className=" justify-center  hover:bg-slate-200 p-2 rounded-md "
          to="/"
        >
          CompyStore
        </NavLink>

        <NavLink
          className="justify-center  hover:bg-slate-200 p-2 rounded-md "
          to="/gallery"
        >
          Gallery
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<ComfyStore />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
