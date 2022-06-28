import {WetehrBoxSmall} from '../components/functions.components';

const dayTwo = ({weatherSvndys, dateConverted, dateConvertedDDMM, dateConvertedTimeHH, dateConvertedTimeMM,  displayFull,  weFilter, hanleClick, weather, dateConvertedTime}) => {
    return ( 
        <>
        {WetehrBoxSmall(
          displayFull,
          weatherSvndys.daily[2].dt,
          weFilter,
          weatherSvndys.daily[2].weather[0].description, 
          weather.sys.country,
          Math.round(weatherSvndys.daily[2].feels_like.day),
          dateConverted(weatherSvndys.daily[2].dt),
          dateConvertedDDMM(weatherSvndys.daily[2].dt),
          weatherSvndys.daily[2].weather[0].main, 
          weatherSvndys.daily[2].weather[0].description, 
          weatherSvndys.daily[2].weather[0].icon,
          Math.round(weatherSvndys.daily[2].temp.max),
          Math.round(weatherSvndys.daily[2].temp.min),
          weatherSvndys.daily[2].humidity,
          weatherSvndys.daily[2].dew_point,
          weatherSvndys.daily[2].feels_like.day,
          weatherSvndys.daily[2].feels_like.night,
          weatherSvndys.daily[2].pressure,
          weatherSvndys.daily[2].wind_speed,
          weatherSvndys.daily[2].sunrise,
          weatherSvndys.daily[2].sunset,
          dateConvertedTimeHH(weatherSvndys.daily[2].sunrise),
          dateConvertedTimeHH(weatherSvndys.daily[2].sunset),
          dateConvertedTimeMM(weatherSvndys.daily[2].sunrise),
          dateConvertedTimeMM(weatherSvndys.daily[2].sunset),
          hanleClick,
          weatherSvndys.daily[2].clouds, 
          weatherSvndys.daily[2].uvi, 
          weatherSvndys.daily[2].wind_deg, 
          weatherSvndys.daily[2].wind_gust,
          weatherSvndys.daily[2].rain,
          weatherSvndys.daily[2].snow,
          weatherSvndys.daily[1].pop,
          weatherSvndys.daily[2].moonrise ,
          weatherSvndys.daily[2].moonset,
          weatherSvndys.daily[2].sunset,
          weatherSvndys.daily[2].sunrise
        )} 
        </>
     );
}
 
export default dayTwo;