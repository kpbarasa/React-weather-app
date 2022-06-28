import { GiDrop, GiBlackball, GiWindsock } from 'react-icons/gi';
import { FaThermometerThreeQuarters} from 'react-icons/fa';
import { WiRainMix, WiMoonrise, WiMoonset, WiSunrise, WiSunset} from 'react-icons/wi';
import {cardSM} from '../components/functions.components'; 
import WeatherCardIconBox from "../components-layout/Layout-icon-box"; 
import WeathercardSunRSunS from '../components-layout/Layout-sunr-suns';



const SevenDays = ({
  loader, weather, weatherHrly, dateConverted, displayFull, dateConvertedTime, dateConvertedTimeHH, dateConvertedTimeMM, activeCard, setActiveCard, dateConvertedTimeHours, hanleClick, weatherSvndys, weFilter, displaySmall

}) => {
  return ( 
        
        <div className={loader === true ?"d-none row weather-card fade-down" : "row weather-card fade-down"} >
        <div className="col-lg-9 col-12">
          <div className="cityTitle h4">{weather.name} {!weather.sys.country ? "" : ","+weather.sys.country+""} 

              <h6 className="dayTitle mt-2"> {dateConverted(weather.dt)} </h6>

              <small className='d-block  mt-2'>
                <span className='col-lg-auto col-12 text-light pl-0'>Feels like </span> <span className='text-muted'>{weather.main.feels_like}&#176;  </span>
              <small className='col-lg-auto col-12 mt-2  h6'>
                <span className='text-light'>min</span> <span className='text-muted'>{weather.main.temp_min}&#176;  </span>
                <span className='text-light'>max</span> <span className='text-muted'>{weather.main.temp_max}&#176;  </span>
              </small>  
              </small>  

              
          </div> 
          
            <p className="weatherTitle"> 
               {weather.weather[0].main}, &nbsp;
               {weather.weather[0].description}  
            </p>   
        </div>
        <div className="col-lg-3  col-12 temp_card">    
          <div className={(displayFull ? 'h3  badge badge-light' : 'h4  badge badge-light')} >{Math.round(weather.main.temp)} <span>&#176;</span>C</div> 
        </div>

        {/* Weather info here CARD SMALL LIST*/}
        <div className="col-lg-12 col-sm-4"> 
                    <div className='row '>
                      
                      {/* Weather info here CARD SMALL*/}
                        {
                          cardSM(
                            "Temperature",
                            weather.main.temp_max+" max "+weather.main.temp_min+" min ",
                            <FaThermometerThreeQuarters/>, 
                            "", 
                            "Minimum & Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded", 
                            "h-card-sm-1")
                        }

                      {/* Weather info here CARD SMALL*/}
                        {
                          cardSM("Pressure",weather.main.pressure, <GiDrop/>, "mb", "Atmospheric pressure on the sea level and on the ground level", "h-card-sm-2")
                        } 

                      {/* Weather info here CARD SMALL*/}
                        {
                          cardSM("Humidity",weather.main.humidity, <GiBlackball/>, "%", "Relative humidity is the ratio of the current absolute humidity to the highest possible absolute humidity (which depends on the current air temperature). A reading of 100 percent relative humidity means that the air is totally saturated with water vapor and cannot hold any more, creating the possibility of rain. This doesn't mean that the relative humidity must be 100 percent in order for it to rain — it must be 100 percent where the clouds are forming, but the relative humidity near the ground could be much less")
                        }

                      {/* Weather info here CARD SMALL*/}
                        {
                          cardSM("Coordinates"," lat : "+weather.coord.lat+"  lon : "+weather.coord.lon, "", "", "means latitude and longitude coordinates derived from a global positioning")
                        }
                    </div> 
        </div> 

        {/* WEATHER DETAILS  */}
        {/* WEATHER CARD TITLE   */}
        {/* <WeatherCardTitle tittle={"More details"} subtitle={""}  cLass={'d-block card-tittle'} iCon={""} description={""}   />  */}
        
        {/* WEATHER CARD ICON BOX */}
        <WeatherCardIconBox  
        iconType="single"
        tittle={"rain"} 
        desc1={""}
        descClass={"h5"}
        description={"Rain / Snow volume for last hour, mm"}
        iCon={<WiRainMix />} 
        rain={"0"} 
        pop={"0"} 
        snow={weather.wind.deg} />
        
        {/* WEATHER CARD ICON BOX */}
        <WeatherCardIconBox 
        iconType="list"
        tittle={"wind"} 
        desc1={"clouds"}
        desc2={"Wind  Direction"}
        desc3={"wind speed"}
        desc4={"wind gust"}
        descClass={""}
        description={"Wind The wind describes the prevailing direction from which the wind is blowing with speeds in miles per hour. The wind forecast is included in the first three periods of the zone forecast."}
        iCon={<GiWindsock />} 
        clouds={weather.clouds.all} 
        windDeg={weather.wind.deg} 
        windSpeed={weather.wind.speed} 
        windGust={weather.wind.gust}
        si={"km"} />
        <WeathercardSunRSunS 
        tittle={"Sun & Moon"}  
        sunrise={weather.sys.sunrise} 
        sunset={weather.sys.sunset} 
        moonrise={weather.sys.sunrise} 
        moonset={weather.sys.sunrise} 
        visibility={weatherSvndys.current.visibility} 
        uviIndex={weatherSvndys.current.uvi}   
        iCon1={<WiSunrise />} 
        iCon2={<WiSunset />}  
        iCon3={<WiMoonrise />} 
        iCon4={<WiMoonset />} />

      </div>
     );
}
 
export default SevenDays;