import {GiDrop, GiBlackball, GiInfo, GiWindsock } from 'react-icons/gi';
import { FaThermometerThreeQuarters } from 'react-icons/fa'; 
import { WiRainMix, WiSnow, WiMoonrise, WiMoonset, WiSunrise, WiSunset} from 'react-icons/wi';
import moment from "moment";   
import WeatherCardTitle from '../components-layout/Layout';
import WeatherCardIconBox from '../components-layout/Layout-icon-box';
import WeathercardSunRSunS from '../components-layout/Layout-sunr-suns';

export const WetehrBoxSmall = (
  displayFull,
  weatherSvndys,
  weFilter,
  weatherName,
  weatherSysCountry,
  feelsLikeDay,
  weatherSvndysDateMM,
  weatherSvndysDate,
  weatherDescriptionMain, 
  weatherDescription, 
  weatherIcon,
  TempMax,
  TempMin,
  weatherHumidity,
  weatherDewPoint,
  weatherFeelsLikeDay,
  weatherFeelsLikeNight,
  weatherPressure,
  weatherWindSpeed,
  weatherSunrise,
  weatherSunset,
  weatherSunriseHH,
  weatherSunsetHH,
  weatherSunriseMM,
  weatherSunsetMM,
  hanleClickWeatherSvndys,  
  weatherCloudsAll,
  weatherWindUvi, 
  weatherWindDeg, 
  weatherWindGust,
  WeatherRain,
  WeatherSnow, 
  WeatherPop,
  weatherMoonrise,
  weatherMoonset,
  visibility
) => {
    return ( 
        
      <div className={(displayFull ? 'col-lg-2 col-md-4 col-4 fade-up' :(weatherSvndys === weFilter  ? 'col-lg-12 col-12 d-block .fade-up' :'d-none') )}>
              
              <div className={displayFull === false ? "" : "weather-card-sm"} onClick={() => hanleClickWeatherSvndys(weatherSvndys)} >   
                <div className='row p-0'>
                 <div className={(displayFull ? ' d-none' : 'col-lg-9 ')}>
                    <h4 className="cityTitle">
                      {weatherName}, {weatherSysCountry}
                        <h6 className='d-block mt-2' >
                          Feels like &nbsp;
                          <span className='text-muted'> 
                            Day {weatherFeelsLikeDay}<span> &#176;</span> &nbsp; 
                            Nignt {weatherFeelsLikeNight}<span> &#176;</span>
                          </span>
                        </h6> 
                    </h4>   
                    <h5 className="dayTitle"> {weatherSvndysDate} </h5>
                    <p className="weatherTitle"> 
                      {weatherDescriptionMain}, &nbsp;
                      {weatherDescription} 
                    </p>   
                 </div>
                 
                 {displayFull ?  
                  <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <div className="h5  badge badge-light"> {(weatherSvndysDateMM)}</div>  
                  </div>  
                  :
                  ""
                 } 
                 
                 <div className="col-lg-3 temp_card">    
                   <div className={(displayFull ? 'h5  badge badge-light' : 'h3 badge badge-light')} > {feelsLikeDay} <span>&#176;</span> </div> 
                 </div>

                </div>

                  <div className="col-lg-12 col-md-12 col-sm-12"> 
                     <br />   
                  </div> 
                   {displayFull ? 
                   <div className="">
                      <img  className="" 
                       src={'http://openweathermap.org/img/wn/'+weatherIcon+'@2x.png'} 
                       alt={'http://openweathermap.org/img/wn/'+weatherIcon+'.png'}  width="100" height="" />
                   </div> 
                    :
                    ""
                   } 

                 <div className="col-lg-12 col-md-12 col-12"> 
                    <div className='row '>
                         {(displayFull ? null :   
                            cardSM(
                              "Temperature",
                              TempMax+" max "+TempMin+" min ",
                              <FaThermometerThreeQuarters/>, 
                              "", 
                              "Minimum & Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded", 
                              "h-card-sm-1")
                          )}

                        {(displayFull ? null :   
                          cardSM("Pressure",weatherPressure, <GiDrop/>, "mb", "Atmospheric pressure on the sea level and on the ground level", "h-card-sm-2")
                        )} 

                       {(displayFull ? null :  
                          cardSM("Humidity",weatherHumidity, <GiBlackball/>, "%", "Relative humidity is the ratio of the current absolute humidity to the highest possible absolute humidity (which depends on the current air temperature). A reading of 100 percent relative humidity means that the air is totally saturated with water vapor and cannot hold any more, creating the possibility of rain. This doesn't mean that the relative humidity must be 100 percent in order for it to rain — it must be 100 percent where the clouds are forming, but the relative humidity near the ground could be much less")
                       )}  


                       {(displayFull ? null :   
                          cardSM("Dew point",weatherDewPoint, "", "", "The temperature when the relative humidity is at 100% is called the dew point and it's at this point that clouds and rain can develop. ")
                        )}
                    </div>
                     <div className="row">
                       
                        {(displayFull ? null :    
                          <WeatherCardIconBox  
                            iconType="single"
                            tittle={weatherDescriptionMain === "snow" ? "snow": "rain"} 
                            desc1={""}
                            descClass={"h5"}
                            description={WeatherRain === "" ? "Snow volume for last hour, mm": "Rain volume for last hour, mm"}
                            iCon={WeatherRain === "" ? <WiSnow /> : <WiRainMix /> } 
                            rain={WeatherRain === "" ? WeatherSnow : WeatherRain} 
                            pop={WeatherPop} 
                            si={"mm"} />
                          )}  
                       
                        {(displayFull ? null :    
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
                          clouds={weatherCloudsAll}
                          windDeg={weatherWindDeg}
                          windSpeed={weatherWindSpeed}
                          windGust={weatherWindGust}
                          si={"km"} />
                        )} 

                        {(displayFull ? null :    
                          <WeathercardSunRSunS tittle={"Sun & Moon"}  sunrise={weatherSunrise} sunset={weatherSunset} moonrise={weatherMoonrise} moonset={weatherMoonset} uviIndex={weatherWindUvi} visibility={visibility} windSpeed={weatherWindSpeed}   iCon1={<WiSunrise />} iCon2={<WiSunset />}  iCon3={<WiMoonrise />} iCon4={<WiMoonset />} />
                        )}   
                     </div>
                 </div>  
               </div> 
      </div>

     );
}
// INPUT FUNCTION Convert date and time format ddd-MM-YYYY (SearchHeader.js)
export const cardSM = (title, weather, icon, si, description, id) =>{ 

  return <div className='col-lg-3 col-md-6 col-sm-auto col-xs-auto m-0 text-light'>
    <div className='h-card'>
    {/* <div  data-toggle="tooltip" title="Hooray!" className='d-block wether-card-small-tittle'>{<GiInfo/>}&nbsp; {title} </div>  */}
    <WeatherCardTitle tittle={title}  cLass={'d-block wether-card-small-tittle'} iCon={<GiInfo/>} description={description} tTId ={id}  /> 
    <h6 className="weatherTitle d-block  mt-3">{icon} {weather} {si}&nbsp;</h6>
    </div>
  </div>
}

export const cardSM2 = (title, weather, icon, si) =>{ 
  return <div className='col-lg-3 col-md-6 m-0 col-12 text-light'>
    <div className='h-card'>
    <div className='d-block wether-card-small-tittle'>{<GiInfo/>}&nbsp; {title} </div> 
    <h6 className="weatherTitle d-block  mt-3">{icon} {weather} {si}&nbsp;</h6>
    </div>
  </div>
}

// INPUT FUNCTION Convert date and time format ddd-MM (SearchHeader.js)
export const dateConverted = (d) =>{
  let conveteddate = moment.unix(d).format("ddd-MM");; 
  return `${conveteddate}`
}

// INPUT FUNCTION Convert date and time format ddd-MM-YYYY (SearchHeader.js)
export const dateConvertedDDMM = (d) =>{
  let conveteddate = moment.unix(d).format("ddd-MM-YYYY");; 
  return `${conveteddate}`
}

// INPUT FUNCTION Convert date and time format hh:mm:ss(SearchHeader.js)
export const dateConvertedTime = (d) =>{
  let conveteddate = moment.unix(d).format("hh:mm");;
  return `${conveteddate}`
}

// INPUT FUNCTION Convert date and time format hh:mm:ss(SearchHeader.js)
export const dateConvertedTimeHH = (d) =>{
  let conveteddate = moment.unix(d).format("HH");;
  return `${conveteddate}`
}

// INPUT FUNCTION Convert date and time format hh:mm:ss(SearchHeader.js)
export const dateConvertedTimeMM = (d) =>{
  let conveteddate = moment.unix(d).format("mm");;
  return `${conveteddate}`
}
 
// INPUT FUNCTION Convert date and time format hh:mm:ss(SearchHeader.js)
export const dateConvertedTimeHours = (d) =>{
let conveteddate = moment.unix(d).format("hh");;
return `${conveteddate}`
} 