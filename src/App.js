import React from "react";
import Movies from "./Movies";
import Schedule from "./Schedule";
import Seats from "./Seats";
import Success from "./Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <a href="/" className="header">
          <header>
            <h1>CINEFLEX</h1>
          </header>
        </a>

        <div className="content">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:movieId" element={<Schedule />} />
            <Route path="/session/:seatId" element={<Seats />} />
            <Route path="/sucesso" element={<Success />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
