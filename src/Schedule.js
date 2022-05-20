import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import imagem from "./assets/img/imagem-teste.png";

export default function Schedule() {
  const [days, setDays] = React.useState([]);
  const [showtimes, setShowtimes] = React.useState([]);

  React.useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes"
    );
    promise.then((requisicao) => {
      const days = requisicao.data.days.map((days) => days);
      setDays([...days]);
      setShowtimes(days.map((s) => s.showtimes));
    });
  }, []);

  return (
    <div className="schedule">
      {console.log(showtimes)}
      <h2 className="pick">Selecione o horário</h2>
      {days.map((object, index) => (
        <ScheduleBox
          weekday={object.weekday}
          date={object.date}
          times={object.showtimes.map((n) => n.name)}
          key={index}
        />
      ))}

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
  );
}
function ScheduleBox({ weekday, date, times }) {
  return (
    <div className="schedule-box">
      <h3>
        {weekday} - {date}
      </h3>
      <div className="schedule-buttons">
        <button className="time-button">{times[0]}</button>
        <button className="time-button">{times[1]}</button>
      </div>
    </div>
  );
}
