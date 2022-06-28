import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import WeatherCarouselCard from '../components-layout/Layout-carousel-card';


const CoruselMain = ({weatherHrly, activeCard, setActiveCard, dateConvertedTimeHours, dateConvertedTimeHH}) => { 

  const funcToggleCard = (id) => { 
    setActiveCard(id)
    console.log("index "+id)
    console.log("toggleMe: "+activeCard);
  }
  

  
  return ( 
      <div className=''> 
      <AliceCarousel
      disableDotsControls={true}
      > 
      <div className='row my-list'>
        { 
          weatherHrly.slice(0, 5).map((res, index) => 
            <WeatherCarouselCard 
            key={res.dt}
            activeCard={activeCard}
            index={index} 
            funcToggleCard={funcToggleCard}
             iconSrc={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'@2x.png'}
             iconAlt={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'.png'}
             WeatherDescription={res.weather[0].description} 
             humidity={res.humidity} 
             windSpeed={res.wind_speed} 
             temperature={res.temp} 
             uviIndex={res.uvi} 
             visibility={res.visibility}
             dewPoint={res.dew_point} 
             clouds={res.clouds}
             windGust={res.wind_gust}
             date={res.dt}
            />
            )
        }  
      </div>
      <div className='row my-list'>
        { 
          weatherHrly.slice(5, 10).map((res, index) => 
            <WeatherCarouselCard 
            activeCard={activeCard}
            index={index} 
            funcToggleCard={funcToggleCard}
             iconSrc={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'@2x.png'}
             iconAlt={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'.png'}
             WeatherDescription={res.weather[0].description} 
             humidity={res.humidity} 
             windSpeed={res.wind_speed} 
             temperature={res.temp} 
             uviIndex={res.uvi} 
             visibility={res.visibility}
             dewPoint={res.dew_point} 
             clouds={res.clouds}
             windGust={res.wind_gust}
             date={res.dt}
            />
            )
        }  
      </div>
      <div className='row my-list'>
        { 
          weatherHrly.slice(10, 15).map((res, index) => 
            <WeatherCarouselCard 
            activeCard={activeCard}
            index={index} 
            funcToggleCard={funcToggleCard}
             iconSrc={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'@2x.png'}
             iconAlt={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'.png'}
             WeatherDescription={res.weather[0].description} 
             humidity={res.humidity} 
             windSpeed={res.wind_speed} 
             temperature={res.temp} 
             uviIndex={res.uvi} 
             visibility={res.visibility}
             dewPoint={res.dew_point} 
             clouds={res.clouds}
             windGust={res.wind_gust}
             date={res.dt}
            />
            )
        }  
      </div>
      <div className='row my-list'>
        { 
          weatherHrly.slice(15, 20).map((res, index) => 
            <WeatherCarouselCard 
            activeCard={activeCard}
            index={index} 
            funcToggleCard={funcToggleCard}
             iconSrc={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'@2x.png'}
             iconAlt={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'.png'}
             WeatherDescription={res.weather[0].description} 
             humidity={res.humidity} 
             windSpeed={res.wind_speed} 
             temperature={res.temp} 
             uviIndex={res.uvi} 
             visibility={res.visibility}
             dewPoint={res.dew_point} 
             clouds={res.clouds}
             windGust={res.wind_gust}
             date={res.dt}
            />
            )
        }  
      </div>
      <div className='row my-list'>
        { 
          weatherHrly.slice(20, 24).map((res, index) => 
            <WeatherCarouselCard 
            activeCard={activeCard}
            index={index} 
            funcToggleCard={funcToggleCard}
             iconSrc={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'@2x.png'}
             iconAlt={'http://openweathermap.org/img/wn/'+res.weather[0].icon+'.png'}
             WeatherDescription={res.weather[0].description} 
             humidity={res.humidity} 
             windSpeed={res.wind_speed} 
             temperature={res.temp} 
             uviIndex={res.uvi} 
             visibility={res.visibility}
             dewPoint={res.dew_point} 
             clouds={res.clouds}
             windGust={res.wind_gust}
             date={res.dt}
            />
            )
        }  
      </div>
        
      
      </AliceCarousel>
      </div>
      
     );
}
 
export default CoruselMain;
