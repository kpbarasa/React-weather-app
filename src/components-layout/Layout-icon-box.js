
import {GiInfo } from 'react-icons/gi'; 
import WeatherCardTitle from "../components-layout/Layout";
import WindmillComponent from '../components-layout/windmill.component';

const WeatherCardIconBox = ({iconType, tittle, desc1, desc2, desc3, desc4, description, iCon, clouds, rain, pop, windDeg, windSpeed, windGust, si}) => {
    return ( <>
        <div className='col-lg-6 col-md-6 col-sm-12 mt-2'>
          <div className='h-card mt-2'>
            {/* ICON BOX START  col-lg-4 col-md-4 col-4  */} 
            <div className='row'> 

              {/* ICON CBOX */}
              <div className='col-lg-4 col-md-4 col-4 margin-r '> 
                <WeatherCardTitle tittle={tittle}  cLass={'d-block h6 wether-card-small-tittle'} iCon={<GiInfo />} 
                description={description}/>
                
                {/* ICON   */} 
                <div className='icon-lrg text-light'>
                  {tittle === "wind" ? <WindmillComponent /> : iCon}
                  
                </div>
              </div>

              {/* ICON BOX CONTENT  */}
              <div className='col-lg-8 col-md-8 col-sm-8'> 
                  <div className=''>

                      {/* ICON LIST  */}
                     <div className={iconType === "list" ? 'row' : 'd-none'}>
                       <div className='col-lg-6 col-md-6 col-6 pt-4 text-right'>
                         <h6 className='wether-card-small-desc'>{desc1}</h6>
                       </div>
                       <div className='col-lg-6 col-md-6 col-6 pt-4'>
                         <h6>{clouds}%</h6>
                       </div>
                       <div className='col-lg-6 col-md-6col-6 pt-2 text-right'>
                         <h6 className='wether-card-small-desc'>{desc2}</h6>
                       </div>
                       <div className='col-lg-6 col-md-6 col-6 pt-2'>
                         <h6>{windDeg} {si}</h6>
                       </div>
                       <div className='col-lg-6 col-md-6 col-6 pt-2 text-right'>
                         <h6 className='wether-card-small-desc'>{desc3}</h6>
                       </div>
                       <div className='col-lg-6 col-md-6 col-6 pt-2'>
                         <h6>{windSpeed} {si}</h6>
                       </div>
                       <div className='col-lg-6 col-md-6 col-6 pt-2 text-right'>
                         <h6 className='wether-card-small-desc'>{desc4}</h6>
                       </div>
                       <div className='col-lg-6 col-md-6 col-6 pt-2'>
                         <h6>{windGust} {si}</h6>
                       </div>
                     </div>

                     {/* ICON SINGLE  */}
                     <div className={iconType === "single" ? 'row mt-4' : 'd-none'}> 
                       <div className='col-lg-12 col-md-12 col-12 pt-4 text-center'>
                         <div className='row'>
                           <div className='col-lg-6 col-md-6 col-12'> 
                            <h4>{!rain  ? "0" : rain} <span className='h6'>mm</span></h4>
                           </div>
                           <div className='col-lg-6 col-md-6 col-12'> 
                            <h4><span className='h6'>pop</span> {!pop ? 0 : pop}<small>%</small></h4>
                           </div>
                         </div>
                       </div>
                     </div>

                  </div> 
              </div> 

            </div>
            {/* ICON BOX START  col-lg-4 col-md-4 col-4  */} 
        </div>
        </div>
    </> );
}
 
export default WeatherCardIconBox;