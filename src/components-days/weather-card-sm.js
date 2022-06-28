
import { GiWindsock, GiDrop, GiBlackball } from 'react-icons/gi';
import { FaInfoCircle, FaThermometerThreeQuarters,FaSun,FaRegSun, FaEye} from 'react-icons/fa';
const WeatherCardSM = ({tittle, weather}) => {
    return ( 
      <>
      <div className='col-lg-3 col-12 text-light'>
         <div className='h-card'>
          <div className='d-block text-muted'>{tittle} <FaInfoCircle/> </div> 
          <h6 className="weatherTitle d-flex  mt-3"><GiBlackball/> &nbsp; {weather} hpa </h6>
        </div>
      </div> 
      </>
        
     );
}
 
export default WeatherCardSM;