
import { GiWindsock, GiDrop, GiBlackball } from 'react-icons/gi';
import { FaRegWindowMinimize, FaThermometerThreeQuarters,FaSun,FaRegSun } from 'react-icons/fa';

const CurrentDay = ({loader, weather, dateConverted, displayFull, dateConvertedTime}) => {
    return ( 
        
        <div className={loader === true ?"d-none row weather-card fade-down" : "row weather-card fade-down"} >
        <div className="col-lg-12 col-sm-12 ">  
          {/* <div className="weather-icon">
           <img  className="weather-icon-main" 
           src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@4x.png'} 
           alt={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'.png'}  width="" height="" />
          </div>  */}
        </div>
        <div className="col-lg-9 col-12">
          <h4 className="cityTitle">{weather.name}, {weather.sys.country}</h4>
          {/* <h5 className="dayTitle">{dateBuilder(new Date())} </h5> */}
          <h5 className="dayTitle"> {dateConverted(weather.dt)} </h5>
            <p className="weatherTitle"> 
               {weather.weather[0].main}, &nbsp;
               {weather.weather[0].description}  
            </p>   
        </div>
        <div className="col-lg-3  col-12 temp_card">    
          <div className={(displayFull ? 'h3  badge badge-light' : 'h4  badge badge-light')} >{Math.round(weather.main.temp)} <span>&#176;</span>C</div> 
        </div>

        {/* Weather info here  */}
        <div className="col-lg-12 col-sm-4"> 
          <div>
             <h6 className="weatherTitle"><FaThermometerThreeQuarters/> {weather.main.temp_max}<span>&#176;</span>   max / {weather.main.temp_min}<span>&#176;</span>   min</h6>
          </div>
          <h6 className="weatherTitle">
             <GiDrop/> {weather.main.humidity}<span> %</span>   &nbsp; 
             <span>Feels like {weather.main.feels_like}<span> &#176;</span></span>
          </h6>
          <h6 className="weatherTitle"><GiBlackball/> {weather.main.pressure} hpa</h6>
          <h6 className="weatherTitle"><GiWindsock/> {weather.wind.speed} m/sec</h6>
        </div> 
        <div className="col-lg-12 col-md-12 col-sm-12"> 
           <h6 className="weatherTitle  mt-2">
             
             <span className="mb-2">Sunrise and sunset</span>
      
             <span className="d-block  mt-2">
               <span className="padding-small mobile-block mr-2"><FaRegSun />&nbsp; {dateConvertedTime(weather.sys.sunrise)}&nbsp;AM</span>
               
               <span className="padding-small mobile-block mr-2"><FaSun />&nbsp; {dateConvertedTime(weather.sys.sunset)}&nbsp;PM</span>
               
             </span> 
           </h6>
        </div> 

      </div>
     );
}
 
export default CurrentDay;