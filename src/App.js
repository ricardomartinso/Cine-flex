import React from "react";

import imagem from "./assets/img/imagem-teste.png";
export default function App() {
  return (
    <div className="container">
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <div className="content">
        <h2 className="pick">Selecione o filme</h2>
        <div className="movies invisivel">
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
          <div className="movie-box">
            <img src={imagem} alt="" />
          </div>
        </div>
        <div className="schedule">
          <div className="schedule-box">
            <h3>Quinta feira - 26/05/2022</h3>
            <div className="schedule-buttons">
              <button className="time-button">16:00</button>
              <button className="time-button">19:30</button>
            </div>
          </div>
          <div className="schedule-box">
            <h3>Sexta feira - 27/05/2022</h3>
            <div className="schedule-buttons">
              <button className="time-button">16:00</button>
              <button className="time-button">19:30</button>
            </div>
          </div>
          <div className="schedule-box">
            <h3>Sábado - 28/05/2022</h3>
            <div className="schedule-buttons">
              <button className="time-button">16:00</button>
              <button className="time-button">19:30</button>
            </div>
          </div>
          <footer>
            <div className="footer-img">
              <img src={imagem} alt="" />
            </div>
            <div className="session-info">
              <div className="footer-movie-name">Enola HOMES</div>
              <div className="footer-movie-session">Quinta feira - 16:00</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
