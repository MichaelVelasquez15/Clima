import { useEffect } from "react";
import { useState } from "react";
import ImageData from "./Image";
import Top from "./Top";

function Card() {
  const KEY = "4034a0257120e649cb4d522b971c740c";
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [current, setCurrent] = useState(null);
  const [visible, setVisible] = useState(false);

  const fecha = new Date();
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const dayOfWeek = dias[fecha.getDay()];
  const day = fecha.getDate();
  const month = meses[fecha.getMonth()];

  useEffect(() => {
    if (lat === null && long === null) return;

    console.log("fetch de datos");
    const getData = async () => {
      const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}&units=metric`;
      const res = await fetch(link);
      const data = await res.json();

      console.log(data);
      setCurrent(data);
    };
    getData();
  }, [lat, long]);

  const handleSucces = (data) => {
    console.log("tenemos la ubicacion", data);
    const { latitude, longitude } = data.coords;
    setLat(latitude);
    setLong(longitude);
  };

  const handleError = () => {
    console.log("Ubicacion denegada");
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSucces, handleError);
  };

  const cerrar = () => {
    setVisible(true);
  };

  const abrir = () => {
    setVisible(false);
  };

  return (
    <section className="layout">
      {/* <nav className="bar">
        <button onClick={cerrar}>X</button>
        <input type="text" onChange={}/>
        <button className="bt">Search</button>
      </nav> */}
      <div className="sidebar">
        <nav className="nav1">
          <button className="bt1" onClick={abrir}>
            Search for places
          </button>
          <button className="bt2" onClick={handleLocation}>
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </nav>

        <div className="caja">
          <div className="fondo">
            <img src="/weather-app-master/Cloud-background.png" alt="" />
          </div>
          <div className="logo">
            <img src="weather-app-master/Clear.png" alt="" />
          </div>
        </div>

        <div className="temp">
          <div className="nu">
            {current === null
              ? "da click al boton plis"
              : current.main.temp + "°c"}
          </div>
        </div>
        <div className="medio">
          <div className="timepo">
            <h3>{current?.weather[0].main}</h3>
          </div>

          <div>
            <h6>
              Today . {dayOfWeek}, {day} {month}
            </h6>
          </div>
        </div>

        <div className="local">
          <div className="ubi">
            <span className="material-symbols-outlined">location_on</span>
            {current === null ? "da click al boton plis" : current.name}
          </div>
        </div>
      </div>

      <div className="body">
        <div>
          <Top />
        </div>

        <div className="abajo">
          <h1>Today's Hightlights</h1>
          <div className="cards">
            <div>
              <h4>Wind status</h4>
              <p>
                <strong>{current?.wind.speed + " mph"}</strong>
              </p>
            </div>
            <div className="ba">
              <h4>Humidity</h4>
              <p>
                <strong>{current?.main.humidity + " %"}</strong>
              </p>
              <div className="barra">
                <div
                  className="porcen"
                  style={{ width: `${current?.main.humidity}%` }}
                ></div>
              </div>
            </div>
            <div>
              <h4>Visibility</h4>
              <p>
                <strong>{current?.visibility + " milles"}</strong>
              </p>
            </div>
            <div>
              <h4>Air Pressure</h4>
              <p>
                <strong>{current?.main.pressure + " mb"}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;

<main className="container"></main>;
