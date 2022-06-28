import { GiWindsock, GiDrop, GiBlackball, GiDew } from 'react-icons/gi';
import { FaCloud, FaThermometerThreeQuarters,FaEye,FaSun } from 'react-icons/fa';  
import {dateConvertedTimeHours, dateConvertedTimeHH} from '../components/functions.components'; 

const WeatherCarouselCard = ({
    uniqKey, activeCard, index, funcToggleCard, iconSrc, iconAlt, WeatherDescription, humidity, windSpeed, temperature, uviIndex, visibility, dewPoint, clouds, windGust, date
}) => {
    return ( <>
        <div key={uniqKey} className={activeCard === index ? 'col-lg-4 col-12 p-2' : 'col-lg-2 col-12 p-2'}>
          <div id={"H1"+index} onClick={() => funcToggleCard(index)} className='active h-card'>
          <div className='row'>
            <div className={activeCard === index ? 'col-lg-4 col-12 pl-4 margin-r' : 'col-12 pl-4'}>
              <div className=''>

                <span className='d-block'>
                  <div className="w-icon-box">
                  <img  className="w-icon-img" 
                    src={iconSrc} 
                    // alt={iconAlt}  
                    width="100" height="" alt={iconSrc}/>
                  </div> 
                </span>

                <span className='d-block'>
                  <h6>{temperature} &#176;</h6>
                  <h6 className='wether-card-small-desc '> <span className='small'>{WeatherDescription}</span></h6>
                </span> 

                <span className='d-block mt-5'> 
                  <h6 className='small'><GiDrop /> {humidity}%</h6> 
                  <h6 className='small'><GiWindsock /> {windSpeed} km </h6>  
                </span>

              </div> 
            </div>

            <div className={activeCard === index ? 'col-lg-8 pl-12 margin-b' : 'd-none'}>
              <div className='row'> 
                <span className='col-12'>
                  <div className='margin-t'></div>
                </span>
                <span className='col-6'>
                  <h6 className='small wether-card-small-desc'>Feels like</h6>
                  <h6 className='small'><FaThermometerThreeQuarters /> {temperature} &#176;</h6>
                </span>
                <span className='col-6'>
                  <h6 className='small wether-card-small-desc'>Humidity</h6>
                  <h6 className='small'><GiBlackball /> {humidity}%</h6>
                </span>
                <span className='col-6 mt-2'>
                  <h6 className='small wether-card-small-desc'>UV index</h6>
                  <h6 className='small'><FaSun /> {uviIndex}</h6>
                </span>
                <span className='col-6 mt-2'>
                  <h6 className='small wether-card-small-desc'>Visibility</h6>
                  <h6 className='small'><FaEye /> {visibility}</h6>
                </span>
                <span className='col-6 mt-2'>
                  <h6 className='small wether-card-small-desc'>Dew point</h6> 
                  <h6 className='small'><GiDew /> {dewPoint} &#176;</h6>
                </span>
                <span className='col-6 mt-2'>
                  <h6 className='small wether-card-small-desc'>Cloud</h6>
                  <h6 className='small'><FaCloud/> {clouds}%</h6>
                </span>
                <span className='col-6 mt-2'>
                  <h6 className='small wether-card-small-desc'>Wind gust</h6>
                  <h6 className='small'><GiWindsock/> {windGust}km/h</h6>
                </span>
              </div>
            </div>

            <div className='col-12 text-left mt-2 pt-2'>
              <div className='margin-t'>
                <h6 className='ml-3'>{dateConvertedTimeHours(date)}  {dateConvertedTimeHH(date) > 12 ? "PM" : "AM"} </h6>
              </div>
            </div>
          </div> 
          </div>

        </div>
    
    </> );
}
 
export default WeatherCarouselCard;<>

</>