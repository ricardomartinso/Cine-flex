import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
  const [seatsArray, setSeatsArray] = useState([]);
  const [seatsName, setSeatsName] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [success, setSuccess] = useState({});
  const navigate = useNavigate();

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
      setDay(request.data.day);

      setSuccess();
    });
  }, []);

  function removeRepeatedId(id) {
    const seatsNewArray = [...seatsArray];
    if (seatsArray.includes(id)) {
      const newArray = seatsNewArray.filter((seatId) => seatId !== id);
      setSeatsArray(newArray);
      return;
    }
  }
  function removeRepeatedIdName(number) {
    const seatsNewArray = [...seatsName];
    if (seatsName.includes(number)) {
      const newArray = seatsNewArray.filter(
        (seatIdName) => seatIdName !== number
      );
      setSeatsName(newArray);
      return;
    }
  }

  function checkCpf(string) {
    const regex = /^[0-9]{11}$/;
    return regex.test(string);
  }

  function buySeat(event) {
    event.preventDefault();

    if (checkCpf(cpf)) {
      const buyerInfo = {
        name,
        cpf,
        ids: seatsArray,
      };
      const promise = axios.post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        buyerInfo
      );

      promise.then(() => {
        const success = {
          movieTitle: footerMovie.title,
          movieTime: time,
          movieDate: day.date,
          seats: seatsName,
          buyerName: name,
          buyerCpf: cpf,
        };
        navigate("/sucesso", { state: success }, { replace: true });
      });
    } else {
      alert(
        "CPF Inválido por favor digite novamente sem os pontos ou traços, somente utilize números"
      );
    }
  }
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
            seatsArray={seatsArray}
            setSeatsArray={setSeatsArray}
            seatsName={seatsName}
            setSeatsName={setSeatsName}
            removeRepeatedId={removeRepeatedId}
            removeRepeatedIdName={removeRepeatedIdName}
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

        <form onSubmit={buySeat}>
          <div className="buyer-input">
            <label htmlFor="name">Nome do comprador:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o seu nome..."
              minLength={3}
              required
            />
          </div>

          <div className="buyer-input">
            <label htmlFor="cpf">CPF do comprador:</label>
            <input
              id="cpf"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="Digite o seu cpf..."
              minLength={11}
              required
            />
          </div>

          <button>Comprar Assentos</button>
        </form>
      </SeatsStyle>

      <footer>
        <div className="footer-img">
          <img src={footerMovie.posterURL} alt="" />
        </div>
        <div className="session-info">
          <div className="footer-movie-name">{footerMovie.title}</div>
          <div className="footer-movie-session">
            {day.weekday} - {time}
          </div>
        </div>
      </footer>
    </SeatsContentStyle>
  );
}

function Seat({
  number,
  id,
  color,
  seatsArray,
  setSeatsArray,
  removeRepeatedId,
  seatsName,
  setSeatsName,
  removeRepeatedIdName,
}) {
  const [seatColor, setSeatColor] = useState(color);

  function changeColor() {
    if (seatColor === "true") {
      setSeatColor("selected");
      setSeatsArray([...seatsArray, id]);
      setSeatsName([...seatsName, number]);
    } else if (seatColor === "selected") {
      setSeatColor("true");
    } else if (seatColor === "false") {
      alert("Assento não disponível");
    }
  }

  return (
    <SeatStyle
      className={seatColor}
      onClick={() => {
        removeRepeatedId(id);
        removeRepeatedIdName(number);
        changeColor();
      }}
      id={id}
    >
      {number}
    </SeatStyle>
  );
}
