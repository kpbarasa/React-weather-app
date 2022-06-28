import {WetehrBoxSmall} from '../components/functions.components';

const DayThree = ({weatherSvndys, dateConverted, dateConvertedDDMM, dateConvertedTimeHH, dateConvertedTimeMM, displayFull,  weFilter, hanleClick, weather, dateConvertedTime}) => {
    return ( 
        <>
        {WetehrBoxSmall(
          displayFull,
          weatherSvndys.daily[3].dt,
          weFilter,
          weatherSvndys.daily[3].weather[0].description, 
          weather.sys.country,
          Math.round(weatherSvndys.daily[3].feels_like.day),
          dateConverted(weatherSvndys.daily[3].dt),
          dateConvertedDDMM(weatherSvndys.daily[3].dt),
          weatherSvndys.daily[3].weather[0].main, 
          weatherSvndys.daily[3].weather[0].description, 
          weatherSvndys.daily[3].weather[0].icon,
          Math.round(weatherSvndys.daily[3].temp.max),
          Math.round(weatherSvndys.daily[3].temp.min),
          weatherSvndys.daily[3].humidity,
          weatherSvndys.daily[3].dew_point,
          weatherSvndys.daily[3].feels_like.day,
          weatherSvndys.daily[3].feels_like.night,
          weatherSvndys.daily[3].pressure,
          weatherSvndys.daily[3].wind_speed,
          weatherSvndys.daily[3].sunrise,
          weatherSvndys.daily[3].sunset,
          dateConvertedTimeHH(weatherSvndys.daily[2].sunrise),
          dateConvertedTimeHH(weatherSvndys.daily[2].sunset),
          dateConvertedTimeMM(weatherSvndys.daily[2].sunrise),
          dateConvertedTimeMM(weatherSvndys.daily[2].sunset),
          hanleClick,
          weatherSvndys.daily[3].clouds, 
          weatherSvndys.daily[3].uvi, 
          weatherSvndys.daily[3].wind_deg, 
          weatherSvndys.daily[3].wind_gust,
          weatherSvndys.daily[3].rain,
          weatherSvndys.daily[3].snow,
          weatherSvndys.daily[1].sunset,
          weatherSvndys.daily[1].sunrise
        )} 
        </>
     );
}
 
export default DayThree;
