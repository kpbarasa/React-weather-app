import { GiWindsock, GiDrop, GiBlackball } from 'react-icons/gi';
import { FaThermometerThreeQuarters,FaSun,FaRegSun } from 'react-icons/fa';

const DayFive = ({weatherSvndys, dateConverted, displayFull,  weFilter, hanleClick, weather, dateConvertedTime}) => {
    return ( 

        <div key={ dateConverted(weatherSvndys.daily[5].dt)}
                className={(displayFull ? 'col-xl-2 col-lg-4 col-md-4 col-12 d-block pull-left fade-up' :(weatherSvndys.daily[5].dt === weFilter  ? 'col-lg-12 col-12 d-block pull-left .fade-up' :'d-none') )}>
                
                <div className="row weather-card-sm" onClick={() => hanleClick(weatherSvndys.daily[5].dt)} >   

                   <div className={(displayFull ? ' d-none' : 'col-lg-9 ')}>
                      <h4 className="cityTitle">{weather.name}, {weather.sys.country}</h4>    
                   </div>
                   <div className="col-lg-3   temp_card mt-3">   
                     <div className={(displayFull ? 'h5  badge badge-light' : 'h3  badge badge-light')} >{Math.round(weatherSvndys.daily[5].feels_like.day)}  <span>&#176;</span>C</div> 
                   </div>
            
                   
                   <div className="col-lg-12 col-md-12 col-sm-12 mt-0">
                       <h6 className="cityTitle-sm mb-0"> { dateConverted(weatherSvndys.daily[5].dt)}</h6> 
                       <p className="weatherTitle text-capitalize"> 
                          {weatherSvndys.daily[5].weather[0].description }   
                       </p>  
                   </div>

                     {displayFull ? 
                     <div className="w-icon">
                        <img  className="" 
                         src={'http://openweathermap.org/img/wn/'+weatherSvndys.daily[5].weather[0].icon+'@2x.png'} 
                         alt={'http://openweathermap.org/img/wn/'+weatherSvndys.daily[5].weather[0].icon+'.png'}  width="100" height="" />
                     </div> 
                      :
                      ""
                     } 

                   <div className="col-lg-12 col-md-12 col-12"> 
                       <div className="row">
                         
                         {(displayFull ? null : 
                         <h6 className="col-lg-12 col-12 weatherTitle">
                           <FaThermometerThreeQuarters/> 
                           {Math.round(weatherSvndys.daily[5].temp.max)} Max / &nbsp;
                           {Math.round(weatherSvndys.daily[5].temp.min)} min
                         </h6>
                           )}

                          {(displayFull ? null : 
                         <h6 className="col-lg-12 col-12 weatherTitle">
                           <GiDrop/> 
                           {weatherSvndys.daily[5].humidity} %  &nbsp; 

                           <span>Feels like 
                             Day {weatherSvndys.daily[5].feels_like.day}<span> &#176;</span> &nbsp; 
                             Nignt {weatherSvndys.daily[5].feels_like.night}<span> &#176;</span>
                           </span>
                         </h6>
                          )} 

                         {(displayFull ? null : 
                         <h6 className="col-lg-12 col-12 weatherTitle"><GiBlackball/> {weatherSvndys.daily[5].pressure} hpa</h6>
                         )} 

                         {(displayFull ? null : 
                         <h6 className="col-lg-12 col-12 weatherTitle"><GiWindsock/> {weatherSvndys.daily[5].wind_speed } m/sec</h6>
                          )} 
                         <div className="col-lg-12 col-md-12 col-12"> 
                         
                          {(displayFull ? null : 
                          <h6 className="weatherTitle mt-2">
               
                            <span className="mb-3">Sunrise and sunset</span>
                            <br />
                            <span className="d-block mt-2">
                              <span className="padding-small mobile-block"><FaRegSun /> {dateConvertedTime(weatherSvndys.daily[5].sunrise)}&nbsp;AM</span>
                 
                              <span className="padding-small mobile-block"><FaSun /> {dateConvertedTime(weatherSvndys.daily[5].sunrise)}&nbsp;PM</span>
                 
                            </span> 
                          </h6>
                           )} 
                        </div> 

                       </div>
                   </div>  
                 </div> 
              </div>
     );
}
 
export default DayFive;