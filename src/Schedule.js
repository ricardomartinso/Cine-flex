import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Schedule() {
  const [days, setDays] = React.useState([]);
  const [footer, setFooter] = React.useState({});
  const params = useParams();

  React.useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.movieId}/showtimes`
    );
    promise.then((requisicao) => {
      const days = requisicao.data.days.map((days) => days);
      const footer = { ...requisicao.data };
      setDays([...days]);
      setFooter(footer);
    });
  }, []);

  return (
    <div className="schedule">
      <h2 className="pick">Selecione o horário</h2>
      {days.map((day) => (
        <ScheduleBox
          key={day.id}
          weekday={day.weekday}
          date={day.date}
          showtimes={day.showtimes}
        />
      ))}

      <footer>
        <div className="footer-img">
          <img src={footer.posterURL} alt="" />
        </div>
        <div className="session-info">
          <div className="footer-movie-name">{footer.title}</div>
        </div>
      </footer>
    </div>
  );
}
function ScheduleBox({ weekday, date, showtimes }) {
  return (
    <div className="schedule-box">
      <h3>
        {weekday} - {date}
      </h3>
      <div className="schedule-buttons">
        {showtimes.map((showtime) => (
          <Link to={`/session/${showtime.id}`}>
            <button className="time-button" id={showtime.id}>
              {showtime.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
