import WeatherData from '../WeatherData/WeatherData.jsx';
import './WeatherForecast.css';

export const WeatherForecast = ({ days }) => {
  return (
    <>
      {days.map((day, index) => (
          <WeatherData key={index} day={ day.day} img={day.img}
           imgAlt={day.imgAlt} conditions={day.conditions} time={day.time} />
      ))}
    </>
  );
}

export default WeatherForecast;