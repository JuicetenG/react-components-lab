import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';

export const WeatherData = ({ day, img, imgAlt, conditions, time}) => {

  return(
      <section className="weather">
        <h2>{day}</h2>
        <WeatherIcon img={img} imgAlt={imgAlt} />
        <p><span>conditions: </span>{conditions}</p>
        <p><span>time: </span>{time}</p>
      </section>
  )
}

export default WeatherData;