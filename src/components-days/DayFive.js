import {WetehrBoxSmall} from '../components/functions.components';

const DayFive = ({weatherSvndys, dateConverted, dateConvertedDDMM, dateConvertedTimeHH, dateConvertedTimeMM, displayFull,  weFilter, hanleClick, weather, dateConvertedTime}) => {
    return (  
        <>
        {WetehrBoxSmall(
          displayFull,
          weatherSvndys.daily[5].dt,
          weFilter,
          weather.name,
          weather.sys.country,
          Math.round(weatherSvndys.daily[5].feels_like.day),
          dateConverted(weatherSvndys.daily[5].dt),
          dateConvertedDDMM(weatherSvndys.daily[5].dt),
          weatherSvndys.daily[5].weather[0].main, 
          weatherSvndys.daily[5].weather[0].description, 
          weatherSvndys.daily[5].weather[0].icon,
          Math.round(weatherSvndys.daily[5].temp.max),
          Math.round(weatherSvndys.daily[5].temp.min),
          weatherSvndys.daily[5].humidity,
          weatherSvndys.daily[5].dew_point,
          weatherSvndys.daily[5].feels_like.day,
          weatherSvndys.daily[5].feels_like.night,
          weatherSvndys.daily[5].pressure,
          weatherSvndys.daily[5].wind_speed,
          weatherSvndys.daily[5].sunrise,
          weatherSvndys.daily[5].sunset,
          dateConvertedTimeHH(weatherSvndys.daily[5].sunrise),
          dateConvertedTimeHH(weatherSvndys.daily[5].sunset),
          dateConvertedTimeMM(weatherSvndys.daily[5].sunrise),
          dateConvertedTimeMM(weatherSvndys.daily[5].sunset),
          hanleClick, 
          weatherSvndys.daily[5].clouds, 
          weatherSvndys.daily[5].uvi, 
          weatherSvndys.daily[5].wind_deg, 
          weatherSvndys.daily[5].wind_gust,
          weatherSvndys.daily[5].rain,
          weatherSvndys.daily[5].snow,
          weatherSvndys.daily[1].sunset,
          weatherSvndys.daily[1].sunrise
          // weatherSvndys.current.visibility, 
        )} 
        </>
     );
}
 
export default DayFive;