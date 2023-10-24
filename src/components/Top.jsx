import { useEffect, useState } from "react";

function Top() {
  const [data, setdata] = useState(null);
  const [datos, setDatos] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=lima&appid=4034a0257120e649cb4d522b971c740c&units=metric`
      );
      const datos = await res.json();

      setdata(datos);
    };

    getData();
  }, [datos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = e.target[0].value;
    setDatos(texto);
  };
  return (
    <main>
      <div className="layout2">
        <div>
          <h3 className="tit">
            <strong>Tomorrow</strong>
          </h3>
          {/* <p>{data.list.main.temp_max}</p> */}
        </div>
        <div>
          <p>2</p>
        </div>
        <div>
          <p>3</p>
        </div>
        <div>
          <p>4</p>
        </div>
        <div>
          <p>5</p>
        </div>
      </div>
    </main>
  );
}

export default Top;
