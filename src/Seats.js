import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import imagem from "./assets/img/imagem-teste.png";
import {
  SeatsContentStyle,
  SeatsStyle,
  SeatStyle,
  SeatsInformation,
} from "./SeatsStyled.js";

export default function Seats() {
  const params = useParams();
  const [seats, setSeats] = useState([]);
  const [footerMovie, setFooterMovie] = useState({});
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.seatId}/seats`
    );
    promise.then((request) => {
      const seatsTest = [...request.data.seats];
      const footerMovie = { ...request.data.movie };
      console.log(seatsTest);
      setSeats(seatsTest);
      setFooterMovie(footerMovie);
      setTime(request.data.name);
      setDay(request.data.day.weekday);
    });
  }, []);

  return (
    <SeatsContentStyle>
      <h2 className="pick">Selecione o(s) assento(s)</h2>
      <SeatsStyle>
        {seats.map((seat) => (
          <Seat
            color={seat.isAvailable.toString()}
            number={seat.name}
            key={seat.id}
            id={seat.id}
          ></Seat>
        ))}
        <div className="seats-legends">
          <div className="legend">
            <SeatStyle className="selected"></SeatStyle>
            Selecionado
          </div>
          <div className="legend">
            <SeatStyle className="true"></SeatStyle>
            Disponível
          </div>
          <div className="legend">
            <SeatStyle className="false"></SeatStyle>
            Indisponível
          </div>
        </div>
      </SeatsStyle>
      <footer>
        <div className="footer-img">
          <img src={footerMovie.posterURL} alt="" />
        </div>
        <div className="session-info">
          <div className="footer-movie-name">{footerMovie.title}</div>
          <div className="footer-movie-session">
            {day} - {time}
          </div>
        </div>
      </footer>
    </SeatsContentStyle>
  );
}

function Seat({ number, id, color }) {
  const [seatColor, setSeatColor] = useState(color);
  const [seats, setSeats] = useState([]);

  function changeColor(color, id) {
    if (color === "true") {
      setSeatColor("selected");

      const testeSeats = [...seats, id];

      setSeats(...seats, id);

      console.log(testeSeats);
    } else {
      alert("assento não disponível");
    }
  }

  return (
    <SeatStyle
      className={seatColor}
      onClick={() => changeColor(color, id)}
      id={id}
    >
      {number}
    </SeatStyle>
  );
}
