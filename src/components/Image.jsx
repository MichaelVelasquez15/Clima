const ImageData = () => {
  const imageLis = [
    { id: 1, scr: "/public/weather-app-master/Clear.png" },
    { id: 2, scr: "/public/weather-app-master/Hail.png" },
    { id: 3, scr: "/public/weather-app-master/HeavyCloud.png" },
    { id: 4, scr: "/public/weather-app-master/HeavyRain.png" },
    { id: 5, scr: "/public/weather-app-master/LightCloud.png" },
    { id: 6, scr: "/public/weather-app-master/Shower.png" },
    { id: 7, scr: "/public/weather-app-master/Sleet.png" },
    { id: 8, scr: "/public/weather-app-master/Snow.png" },
    { id: 9, scr: "/public/weather-app-master/Thunderstorm.png" },
    { id: 10, scr: "/public/weather-app-master/LightRain.png" },
  ];

  return (
    <div>
      {imageLis.map((image) => (
        <img key={image.id} src={image.scr} />
      ))}
    </div>
  );
};
export default ImageData;
