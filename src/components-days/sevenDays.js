import {FaArrowCircleLeft } from 'react-icons/fa';
import CoruselMain from '../components/Corousel';
import {dateConvertedDDMM } from '../components/functions.components';
import WeatherCardTitle from "../components-layout/Layout";
import DayOne from "./dayOne";
import DayTwo from "./DayTwo";
import DayThree from "./DayThree";
import DayFour from "./DayFour";
import DayFive from "./DayFive";
import DaySix from "./DaySix";



const SevenDays = ({
  loader, weather, weatherHrly, dateConverted, displayFull, dateConvertedTime, dateConvertedTimeHH, dateConvertedTimeMM, activeCard, setActiveCard, dateConvertedTimeHours, hanleClick, weatherSvndys, weFilter, displaySmall

}) => {
  return (

    <div className={loader === true ? "d-none" : "row weather-card fade-down"} >

    {/* minimize button  */}
    <div className="col-lg-12 text-left">
      {/* WEATHER CARD TITLE   */}
      {displayFull ?
        <WeatherCardTitle tittle={"Daily Weather"} subtitle={"7 days"} cLass={'d-block card-tittle'} iCon={""} description={""} />
        : <button className="btn btn-link" onClick={((e) => displaySmall())} > <i className="fa fa-times"></i><FaArrowCircleLeft /> Back </button>}
    </div>

      {/* WEATHER SMALL CARD  */}
      <div className={loader === true ? "d-none" : "d-flex justify-components-between"} >

        {/* Small weather cards here  */}
        <DayOne
          // FUNCTIONS 
          dateConverted={dateConverted}
          dateConvertedDDMM={dateConvertedDDMM}
          dateConvertedTimeHH={dateConvertedTimeHH}
          dateConvertedTimeMM={dateConvertedTimeMM}
          hanleClick={hanleClick}
          dateConvertedTime={dateConvertedTime}
          dateConvertedTimeHours={dateConvertedTimeHours}

          // DATA 
          weather={weather}
          weatherSvndys={weatherSvndys}
          weFilter={weFilter}
          displayFull={displayFull}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        <DayTwo
          // FUNCTIONS 
          dateConverted={dateConverted}
          dateConvertedDDMM={dateConvertedDDMM}
          dateConvertedTimeHH={dateConvertedTimeHH}
          dateConvertedTimeMM={dateConvertedTimeMM}
          hanleClick={hanleClick}
          dateConvertedTime={dateConvertedTime}
          dateConvertedTimeHours={dateConvertedTimeHours}

          // DATA 
          weather={weather}
          weatherSvndys={weatherSvndys}
          weFilter={weFilter}
          displayFull={displayFull}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        <DayThree
          // FUNCTIONS 
          dateConverted={dateConverted}
          dateConvertedDDMM={dateConvertedDDMM}
          dateConvertedTimeHH={dateConvertedTimeHH}
          dateConvertedTimeMM={dateConvertedTimeMM}
          hanleClick={hanleClick}
          dateConvertedTime={dateConvertedTime}
          dateConvertedTimeHours={dateConvertedTimeHours}

          // DATA 
          weather={weather}
          weatherSvndys={weatherSvndys}
          weFilter={weFilter}
          displayFull={displayFull}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        <DayFour
          // FUNCTIONS 
          dateConverted={dateConverted}
          dateConvertedDDMM={dateConvertedDDMM}
          dateConvertedTimeHH={dateConvertedTimeHH}
          dateConvertedTimeMM={dateConvertedTimeMM}
          hanleClick={hanleClick}
          dateConvertedTime={dateConvertedTime}
          dateConvertedTimeHours={dateConvertedTimeHours}

          // DATA 
          weather={weather}
          weatherSvndys={weatherSvndys}
          weFilter={weFilter}
          displayFull={displayFull}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        <DayFive
          // FUNCTIONS 
          dateConverted={dateConverted}
          dateConvertedDDMM={dateConvertedDDMM}
          dateConvertedTimeHH={dateConvertedTimeHH}
          dateConvertedTimeMM={dateConvertedTimeMM}
          hanleClick={hanleClick}
          dateConvertedTime={dateConvertedTime}
          dateConvertedTimeHours={dateConvertedTimeHours}

          // DATA 
          weather={weather}
          weatherSvndys={weatherSvndys}
          weFilter={weFilter}
          displayFull={displayFull}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        <DaySix
          // FUNCTIONS 
          dateConverted={dateConverted}
          dateConvertedDDMM={dateConvertedDDMM}
          dateConvertedTimeHH={dateConvertedTimeHH}
          dateConvertedTimeMM={dateConvertedTimeMM}
          hanleClick={hanleClick}
          dateConvertedTime={dateConvertedTime}
          dateConvertedTimeHours={dateConvertedTimeHours}

          // DATA 
          weather={weather}
          weatherSvndys={weatherSvndys}
          weFilter={weFilter}
          displayFull={displayFull}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        
      </div>
      
         
        {/* WEATHER HOURLY  */} 
        {/* WEATHER CARD TITLE   */}
        <WeatherCardTitle tittle={"Hourly"} subtitle={"24hrs"}  cLass={'d-block card-tittle'} iCon={""} description={""}   /> 

        <div className="col-lg-12 col-md-12 col-sm-12 mt-2">  
           {/* WEATHER COUROUSEL */}
           <CoruselMain 
           weatherHrly={weatherHrly} 
           activeCard={activeCard}
           setActiveCard={setActiveCard} 
           dateConvertedTimeHours={dateConvertedTimeHours}
           dateConvertedTimeHH={dateConvertedTimeHH}
           /> 
        </div> 
    </div>
  );
}

export default SevenDays;