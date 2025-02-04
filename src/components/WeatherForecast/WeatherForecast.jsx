import WeatherData from '../WeatherData/WeatherData.jsx';

export const WeatherForecast = ({ days }) => {
  return (
    <div className="weather">
      {days.map((day, index) => (
        <WeatherData key={index} day={day.day} img={day.img} 
         imgAlt={day.imgAlt} conditions={day.conditions} time={day.time} />
      ))}
    </div>
  );
}

export default WeatherForecast;