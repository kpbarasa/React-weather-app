import {WetehrBoxSmall} from '../components/functions.components';

const DaySix = ({weatherSvndys, dateConverted, dateConvertedDDMM, dateConvertedTimeHH, dateConvertedTimeMM,  displayFull,  weFilter, hanleClick, weather, dateConvertedTime}) => {
    return ( 
        <>
        {WetehrBoxSmall(
          displayFull,
          weatherSvndys.daily[6].dt,
          weFilter,
          weatherSvndys.daily[6].weather[0].description, 
          weather.sys.country,
          Math.round(weatherSvndys.daily[6].feels_like.day),
          dateConverted(weatherSvndys.daily[6].dt),
          dateConvertedDDMM(weatherSvndys.daily[6].dt),
          weatherSvndys.daily[6].weather[0].main, 
          weatherSvndys.daily[6].weather[0].description, 
          weatherSvndys.daily[6].weather[0].icon,
          Math.round(weatherSvndys.daily[6].temp.max),
          Math.round(weatherSvndys.daily[6].temp.min),
          weatherSvndys.daily[6].humidity,
          weatherSvndys.daily[6].dew_point,
          weatherSvndys.daily[6].feels_like.day,
          weatherSvndys.daily[6].feels_like.night,
          weatherSvndys.daily[6].pressure,
          weatherSvndys.daily[6].wind_speed,
          weatherSvndys.daily[6].sunrise,
          weatherSvndys.daily[6].sunset,
          dateConvertedTimeHH(weatherSvndys.daily[6].sunrise),
          dateConvertedTimeHH(weatherSvndys.daily[6].sunset),
          dateConvertedTimeMM(weatherSvndys.daily[6].sunrise),
          dateConvertedTimeMM(weatherSvndys.daily[6].sunset),
          hanleClick,
          weatherSvndys.daily[6].clouds, 
          weatherSvndys.daily[6].uvi, 
          weatherSvndys.daily[6].wind_deg, 
          weatherSvndys.daily[6].wind_gust,
          weatherSvndys.daily[6].rain,
          weatherSvndys.daily[6].snow,
          weatherSvndys.daily[1].sunset,
          weatherSvndys.daily[1].sunrise
        )} 
        </>
     );
}
 
export default DaySix;