
import { GiInfo } from 'react-icons/gi';
import { FaEye } from 'react-icons/fa';
import { WiDaySunny } from 'react-icons/wi';
import WeatherCardTitle from "../components-layout/Layout";
import { dateConvertedTime, dateConvertedTimeHH, dateConvertedTimeMM } from '../components/functions.components';

const WeathercardSunRSunS = ({ tittle, sunrise, sunset, moonrise, moonset, visibility, uviIndex, iCon1, iCon2, iCon3, iCon4 }) => {
  return (<>

    <div className='col-lg-6 col-md-6 col-sm-12 mt-2'>
      <div className='h-card mt-2'>
        <div className='row'>
          <div className="col-12">
            <WeatherCardTitle tittle={tittle} cLass={'d-block h6 wether-card-small-tittle'} iCon={<GiInfo />}
              description={"calculator to calculate times for sunrise, sunset"} />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mt-1">
            <div className='figure-container'>
              {/* <span className="mb-2 d-block  h6">Date and time </span>  */}
              <div className={'col-lg-12 col-md-12 col-6'}>
                <h6 className="weatherTitle mt-5">
                  <small className='d-block text-muted mb-2'>Uv Index <GiInfo /> </small>
                  <WiDaySunny /> {uviIndex}
                </h6>
              </div>
              <div className={'col-lg-12 col-md-12 col-6'}>
                <h6 className="weatherTitle mt-5">
                  <small className='d-block text-muted mb-2'>visibility <GiInfo /> </small>
                  <FaEye /> {visibility} Km
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12  text-center mt-1">

            <div className="h6 weatherTitle col-12 mb-4">
              <span className="row">
                <span className="col-3 ">{iCon1}&nbsp; {dateConvertedTime(sunrise)}&nbsp;<small>AM</small></span>

                <span className="col-6">
                  <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4 arch-sun'></div>
                    <div className='col-4'></div>
                  </div>
                  <h6 className=" d-block ">{dateConvertedTimeHH(sunset)}<small>hrs</small> : {dateConvertedTimeMM(sunset) - dateConvertedTimeMM(sunrise)} <small>min</small></h6>
                </span>

                <span className="col-3 ">{iCon2} {dateConvertedTime(sunset)}&nbsp;<small>PM</small></span>
              </span>
            </div>

            <div className={moonrise ? "weatherTitle h6 col-12" : "d-none"}>
              <span className="row">
                <span className="col-3 ">{iCon3}&nbsp; {dateConvertedTime(moonrise)}&nbsp;<small>AM</small></span>

                <span className="col-6">
                  <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4 arch-moon '></div>
                    <div className='col-4'></div>
                  </div>
                  <h6 className=" d-block ">{dateConvertedTimeHH(moonset) - dateConvertedTimeHH(moonrise)}<small>hrs</small> : {dateConvertedTimeMM(moonset) - dateConvertedTimeMM(moonrise)} <small>min</small></h6>
                </span>

                <span className="col-3 ">{iCon4} {dateConvertedTime(moonset)}&nbsp;<small>PM</small></span>

              </span>
            </div>


          </div>
        </div>
      </div>
    </div>
  </>);
}

export default WeathercardSunRSunS;