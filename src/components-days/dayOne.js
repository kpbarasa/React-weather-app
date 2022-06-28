import {WetehrBoxSmall} from '../components/functions.components';

const dayOne = ({weatherSvndys, weatherHrly, dateConverted, dateConvertedDDMM, dateConvertedTimeHH, dateConvertedTimeMM,  displayFull,  weFilter, hanleClick, weather, dateConvertedTime}) => {
    return ( 
      <>
        {WetehrBoxSmall(
          displayFull,
          weatherSvndys.daily[1].dt,
          weFilter,
          weatherSvndys.daily[1].weather[0].description, 
          weather.sys.country,
          Math.round(weatherSvndys.daily[1].feels_like.day),
          dateConverted(weatherSvndys.daily[1].dt),
          dateConvertedDDMM(weatherSvndys.daily[1].dt),
          weatherSvndys.daily[1].weather[0].main, 
          weatherSvndys.daily[1].weather[0].description, 
          weatherSvndys.daily[1].weather[0].icon,
          Math.round(weatherSvndys.daily[1].temp.max),
          Math.round(weatherSvndys.daily[1].temp.min),
          weatherSvndys.daily[1].humidity,
          weatherSvndys.daily[1].dew_point,
          weatherSvndys.daily[1].feels_like.day,
          weatherSvndys.daily[1].feels_like.night,
          weatherSvndys.daily[1].pressure,
          weatherSvndys.daily[1].wind_speed,
          weatherSvndys.daily[1].sunrise,
          weatherSvndys.daily[1].sunset,
          dateConvertedTimeHH(weatherSvndys.daily[1].sunrise),
          dateConvertedTimeHH(weatherSvndys.daily[1].sunset),
          dateConvertedTimeMM(weatherSvndys.daily[1].sunrise),
          dateConvertedTimeMM(weatherSvndys.daily[1].sunset),
          hanleClick,
          weatherSvndys.daily[1].clouds, 
          weatherSvndys.daily[1].uvi,  
          weatherSvndys.daily[1].wind_deg, 
          weatherSvndys.daily[1].wind_gust,
          weatherSvndys.daily[1].rain,
          weatherSvndys.daily[1].snow,
          weatherSvndys.daily[1].pop,
          weatherSvndys.daily[1].sunset,
          weatherSvndys.daily[1].sunrise
        )} 
      </>
        
     );
}
 
export default dayOne;