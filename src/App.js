import React from "react";
import Movies from "./Movies";
import Schedule from "./Schedule";
import Seats from "./Seats";
import Success from "./Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <div className="container">
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
    </>
  );
}
