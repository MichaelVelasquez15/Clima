import { useEffect, useState } from "react";

function Top() {
  const [data, setdata] = useState(null);
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=lima&appid=4034a0257120e649cb4d522b971c740c&units=metric`
      );
      const datos = await res.json();

      console.log("datos obtenidos", datos);
      setdata(datos);
    };

    getData();
  }, [datos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = e.target[0].value;
    console.log("aqui hay", texto);
    setDatos(texto);
  };

  return (
    <main>
      <div className="layout2">
        <div className="card2">
          <div>
            <h3>
              <strong>Tomorrow</strong>
            </h3>
            <img src="/weather-app-master/Clear.png" alt="" />
            <strong>
              <p>{data?.list[3].main.temp_max + " °c"}</p>
            </strong>
            <p>{data?.list[3].main.temp_min + " °c"}</p>
            <p></p>
          </div>
          <div>
            <p>
              {" "}
              <img src="/weather-app-master/Hail.png" alt="" />
              <strong>
                <p>{data?.list[10].main.temp_max + " °c"}</p>
              </strong>
              <p>{data?.list[10].main.temp_min + " °c"}</p>
            </p>
          </div>
          <div>
            <p>
              {" "}
              <img src="/weather-app-master/LightCloud.png" alt="" />
              <strong>
                <p>{data?.list[18].main.temp_max + " °c"}</p>
              </strong>
              <p>{data?.list[18].main.temp_min + " °c"}</p>
            </p>
          </div>
          <div>
            <p>
              {" "}
              <img src="/weather-app-master/Shower.png" alt="" />
              <strong>
                <p>{data?.list[26].main.temp_max + " °c"}</p>
              </strong>
              <p>{data?.list[26].main.temp_min + " °c"}</p>
            </p>
          </div>
          <div>
            <p>
              {" "}
              <img src="/weather-app-master/Snow.png" alt="" />
              <strong>
                <p>{data?.list[34].main.temp_max + " °c"}</p>
              </strong>
              <p>{data?.list[34].main.temp_min + " °c"}</p>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Top;
