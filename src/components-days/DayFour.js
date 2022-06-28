import {WetehrBoxSmall} from '../components/functions.components';

const DayFour = ({weatherSvndys, dateConverted, dateConvertedDDMM,  dateConvertedTimeHH, dateConvertedTimeMM, displayFull,  weFilter, hanleClick, weather, dateConvertedTime}) => {
    return ( 
        <>
        {WetehrBoxSmall(
          displayFull,
          weatherSvndys.daily[4].dt,
          weFilter,
          weather.name,
          weather.sys.country,
          Math.round(weatherSvndys.daily[4].feels_like.day),
          dateConverted(weatherSvndys.daily[4].dt),
          dateConvertedDDMM(weatherSvndys.daily[4].dt),
          weatherSvndys.daily[4].weather[0].main, 
          weatherSvndys.daily[4].weather[0].description, 
          weatherSvndys.daily[4].weather[0].icon,
          Math.round(weatherSvndys.daily[4].temp.max),
          Math.round(weatherSvndys.daily[4].temp.min),
          weatherSvndys.daily[4].humidity,
          weatherSvndys.daily[4].dew_point,
          weatherSvndys.daily[4].feels_like.day,
          weatherSvndys.daily[4].feels_like.night,
          weatherSvndys.daily[4].pressure,
          weatherSvndys.daily[4].wind_speed,
          weatherSvndys.daily[4].sunrise,
          weatherSvndys.daily[4].sunset,
          dateConvertedTimeHH(weatherSvndys.daily[4].sunrise),
          dateConvertedTimeHH(weatherSvndys.daily[4].sunset),
          dateConvertedTimeMM(weatherSvndys.daily[4].sunrise),
          dateConvertedTimeMM(weatherSvndys.daily[4].sunset),
          hanleClick,
          weatherSvndys.daily[4].clouds, 
          weatherSvndys.daily[4].uvi, 
          weatherSvndys.daily[4].wind_deg, 
          weatherSvndys.daily[4].wind_gust,
          weatherSvndys.daily[4].rain,
          weatherSvndys.daily[4].snow,
          weatherSvndys.daily[1].sunset,
          weatherSvndys.daily[1].sunrise
        )} 
        </>
     );
}
 
export default DayFour;