import React, { useState, useEffect } from "react";
// for API fetching
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaRegWindowMinimize, FaSearchLocation,FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import moment from "moment";   
import DayOne from "./components/dayOne";
import DayTwo from "./components/DayTwo";
import DayThree from "./components/DayThree";
import DayFour from "./components/DayFour";
import DayFive from "./components/DayFive";
import DaySix from "./components/DaySix";
import CurrentDay from "./components/CurrentDay";
import Error403Msg from "./components/Error403Msg";
import PgLoader from "./components/PgLoader";
import SearchResults from "./components/SearchResults"; 
import SearchHeader from "./components/Searchheader";

const api = {
  key:"367957db0221fc406eadcf689ee2057c",
  base:"https:api.openweathermap.org/data/2.5/"
}
const pixbayApi = {
  key:"22381867-aadddc0f591e04750006c3ce6",
  base:"https://pixabay.com/api/"
}

function App() {  
  const [errorMsg, setErrorMsg] = useState(false);
  const [loader, setLoader] = useState(false);
  const [pixWeather, setPixWeather] = useState({});
  const [query, setQuery] = useState('');
  const [queryTwn, setQueryTwn] = useState(''); 
  const [weather, setWeather] = useState([]);
  const [hideResult, setHideResult] = useState(true);
  const [weatherSvndys, setWeatherSvndys] = useState( 
    {
      daily:{ 
        0:{ 
          temp:""
        }
     }

    }
    
  );
  const [getLat, setGetLat] = useState(
     
     {
      coord:{ 
         lat: "",
         lon: '',
      }

     }
  );
  
  const [displayFull, setDisplayFull] = useState(true);
  const [showTwnSrch, setShowTwnSrch] = useState(true);
  const [weFilter, setWeFilter] = useState('');
  const [resContTtl, setResContTtl] = useState('');
  const [showTown, setShowTown] = useState('AF');
  const [restCountry, setRestCountry] = useState([]);
  //   {
  //     name: "Kenya",
  //     capital: "Nairobi", 
  //     region : "Asi",
  //     subregion : "Southern Asia",
  //   },
  //   {
  //     name: "Uganda",
  //     capital: "Kampala", 
  //     region : "Asi",
  //     subregion : "Southern Asia",
  //   },
  //   {
  //     name: "Tanzania",
  //     capital: "Zanzibar", 
  //     region : "Afr",
  //     subregion : "East Africa",
  //   },
  //   {
  //     name: "Australia",
  //     capital: "Kabul", 
  //     region : "Afr",
  //     subregion : "East Africa",
  //   },
  // ]);
  const [restTown, setRestTown] = useState([]); 
  //   {
  //     name: "Nairobi",
  //     country: "Kenya", 
  //     region : "Afr",
  //     subregion : "East Africa",
  //   },
  //   {
  //     name: "Kampala",
  //     country: "Uganda", 
  //     region : "Afr",
  //     subregion : "East Africa",
  //   },
  //   {
  //     name: "Mombasa",
  //     country: "Kenya", 
  //     region : "Afr",
  //     subregion : "East Africa",
  //   },
  //   {
  //     name: "Kiatale",
  //     country: "Kenya", 
  //     region : "Afr",
  //     subregion : "East Africa",
  //   },
  //   {
  //     name: "Arusha",
  //     country: "Tanzania", 
  //     region : "Afr",
  //     subregion : "East Africa",
  //   },
  // ]);
  
  const loadingScreen = () => {
    setLoader(true);
    setInterval(() => {
      if (document.readyState === 'complete') {
        setLoader(false);
        clearInterval();
        // document ready
      }
    }, 5000);
}
  const getLocation = {
    lat:"-37.7021",
    lon:"-121.9358"
  }

  const getDailyWeather = () => {      
    const latitude =  0;
    const longitude = 0;
    const getLocation = {
      lat:latitude,
      lon:longitude
    } 
      fetch(`${api.base}onecall?lat=${getLocation.lat}&lon=${getLocation.lon}&daily&appid=${api.key}&units=metric`)
      .then(res => res.json())
      .then(result => {
        setWeatherSvndys(result); 
        // console.log(result.daily);
        setQuery('');  
      });  
   }
  
const showResult=(i)=>{
   
  setShowTown(i);
  console.log(showTown); 
 }
  
 // Fetch  APIs HERE 
 const searchTown = (i) => {   
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "QmIxRWk2alcwWENlRFNKck5MdWVuQWQ5Um5FTEtFS0toTG4xWlBhVQ==");

var requestOptions = { 
headers: headers
};


fetch("https://api.countrystatecity.in/v1/countries/"+i+"/cities", requestOptions)
.then(res => res.json())
  .then(res => { 
    console.log(res);  
  
    setRestTown(res); 
  })
}

   
  // Fetch  APIs HERE 
  const searchCountry = () => {  
    // FETCH FROM ACCU CURRENT WEATHER 
    // fetch(`https://api.first.org/data/v1/countries`,{mode: 'no-cors'})  
     
    
    
    // GET request using axios with error handling
    // axios.get('http://api.worldbank.org/v2/country/all?format=json')
    // axios.get('https://battuta.medunes.net/api/country/all?key=788982329604f99a8e999f13b4df7829')
    var headers = new Headers();
headers.append("X-CSCAPI-KEY", "QmIxRWk2alcwWENlRFNKck5MdWVuQWQ5Um5FTEtFS0toTG4xWlBhVQ==");

var requestOptions = { 
  headers: headers
};

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(res => res.json())
    .then(res => {
      // fetch('https://battuta.medunes.net/api/country/all?key=788982329604f99a8e999f13b4df7829')
      // .then(response => response.json())
      // .then(res =>{ 
      console.log(res); 

      // console.log("result");

      setRestCountry(res);  
      // console.log(restCountry[7]); 
    })
  }
  const srchAll = (i) => {
    setQuery(i);
    setHideResult(true);
    
    return search2(i); 
  }

  // Fetch  APIs HERE 
  const search = evt => {  

    if(evt.key === "Enter"){ 
      loadingScreen();
      setHideResult(true)
      setDisplayFull(true);

      // FETCH FROM ACCU CURRENT WEATHER 
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)  
      .then(res => {
          if(!res.ok) throw new Error(res.status);
          else return res.json(); 
        })
      .then(result => {
        setWeather(result);
        console.log(result);
        setGetLat(result.coord); 
        setQuery(''); 
        
          const latitude = result.coord.lat;
          const longitude = result.coord.lon; 
          
          const getLocation = {
            lat:latitude,
            lon:longitude
          } 
          
           // FETCH FROM ACCU WEATHER  7 DAYS 
           fetch(`${api.base}onecall?lat=${getLocation.lat}&lon=${getLocation.lon}&daily&appid=${api.key}&units=metric`)
           .then(res => res.json())
           .then(result => {
             setWeatherSvndys(result); 
             console.log(result);
             setQuery('');  
           });    
       
      })
      .catch((error) => {
        console.log('error: ' + error); 
        setDisplayFull(false);
        setErrorMsg(true);  
      });     

      // FETCH FROM PIX BAY 
      fetch(`${pixbayApi.base}/?key=${pixbayApi.key}&q=${query}`)
      .then(res => res.json())
      .then(result => {
        setPixWeather(result.hits); 
        console.log(pixWeather);
      }); 

    } 
      
  }

  const search2 = (i)  => { 

      loadingScreen();
      setHideResult(true)
      setDisplayFull(true);
  
      // FETCH FROM ACCU CURRENT WEATHER 
      fetch(`${api.base}weather?q=${i}&units=metric&APPID=${api.key}`)  
      .then(res => {
          if(!res.ok) throw new Error(res.status);
          else return res.json(); 
        })
      .then(result => {
        setWeather(result);
        console.log(result);
        setGetLat(result.coord); 
        setQuery(''); 
        
          const latitude = result.coord.lat;
          const longitude = result.coord.lon; 
          
          const getLocation = {
            lat:latitude,
            lon:longitude
          } 
          
           // FETCH FROM ACCU WEATHER  7 DAYS 
           fetch(`${api.base}onecall?lat=${getLocation.lat}&lon=${getLocation.lon}&daily&appid=${api.key}&units=metric`)
           .then(res => res.json())
           .then(result => {
             setWeatherSvndys(result); 
             console.log(result);
             setQuery('');  
           });    
       
      })
      .catch((error) => {
        console.log('error: ' + error); 
        setDisplayFull(false); 
        setErrorMsg(true);  
      });     
  
      // FETCH FROM PIX BAY 
      fetch(`${pixbayApi.base}/?key=${pixbayApi.key}&q=${i}`)
      .then(res => res.json())
      .then(result => {
        setPixWeather(result.hits); 
        console.log(pixWeather);
      }); 
  
    
  }
  const searchTown2 =(i) =>{
    // setQueryTwn(i);
    searchTown(i);
  }
  // Input fro text box 
  const onInput = (i) => {
    setQuery(i);
    setHideResult(false);
  }

  // Convert date and time format 
  const dateConverted = (d) =>{
    let conveteddate = moment.unix(d).format("ddd-MM-YYYY");; 
    return `${conveteddate}`
  }
  
  const dateConvertedTime = (d) =>{
    let conveteddate = moment.unix(d).format("hh:mm:ss");;
    return `${conveteddate}`
  }
  
  
  const displaySmall = (e) =>{  
    setDisplayFull(true);
  }
  const hanleClick =(e) =>{ 
    setWeFilter(e);
    setDisplayFull(false);
  }
  useEffect(() => {
    searchCountry();
    searchTown();
    getDailyWeather(); 
  }, []); 
 
 
  
  return (
    <div  className="city-bg" style={{ background: 'url("'+pixWeather[0]?.largeImageURL+'") '}}> 
 

      <Error403Msg errorMsg={errorMsg} setErrorMsg={setErrorMsg} query={query} />

      <PgLoader loader={loader} /> 
      
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>

      <main>
        {/* Search header  Here  */}
        <SearchHeader
          onInput={onInput}
          query={query}
          search={search}
        />

         

        
        {/* SEARCH RESULT CARD  */}
        <SearchResults 
        hideResult={hideResult} 
        setHideResult={setHideResult}
        restCountry={restCountry}
        query={query}
        onInput={onInput}
        loader={loader}
        srchAll={srchAll}
        weather={weather}
        setRestTown={setRestTown}
        setShowTown={setShowTown}
        showTown={showTown}
        setQueryTwn={setQueryTwn}
        queryTwn={queryTwn}
        restTown={restTown}
        searchTown={searchTown}
        searchTown2={searchTown2}
        showTwnSrch={showTwnSrch}
        setShowTwnSrch={setShowTwnSrch}
        resContTtl={resContTtl}
        setResContTtl={setResContTtl}
        />
        
        {(typeof weather.main != "undefined") ? (
      <div>
              
      <div className="">
        
        {/* WEATHER LARGE CARD  */} 
        {(displayFull ?  
           <CurrentDay 
           loader={loader}
           weather={weather}
           dateConverted={dateConverted}
           displayFull={displayFull}
           dateConvertedTime={dateConvertedTime}
           />
          : null
         )}  
         
        {/* WEATHER SMALL CARD  */}  
          <div className={loader === true ?"d-none row" : "row"} >

             {/* minimize button  */}
             <div className="col-lg-12 text-left">
               {displayFull ?  null
               :<button className="rounded wbtn wbtn-minimize" onClick={((e) => displaySmall())} > <i className="fa fa-times"></i><FaRegWindowMinimize /> </button>}
             </div>

             {/* Small weather cards here  */} 
              <DayOne 
              weatherSvndys={weatherSvndys}  
              weFilter={weFilter}
              dateConverted={dateConverted}
              displayFull ={displayFull}
              hanleClick={hanleClick}
              weather={weather}
              dateConvertedTime={dateConvertedTime}
               />

              <DayTwo 
              weatherSvndys={weatherSvndys}  
              weFilter={weFilter}
              dateConverted={dateConverted}
              displayFull ={displayFull}
              hanleClick={hanleClick}
              weather={weather}
              dateConvertedTime={dateConvertedTime}
               />

              <DayThree 
              weatherSvndys={weatherSvndys}  
              weFilter={weFilter}
              dateConverted={dateConverted}
              displayFull ={displayFull}
              hanleClick={hanleClick}
              weather={weather}
              dateConvertedTime={dateConvertedTime}
              />

              <DayFour  
              weatherSvndys={weatherSvndys}  
              weFilter={weFilter}
              dateConverted={dateConverted}
              displayFull ={displayFull}
              hanleClick={hanleClick}
              weather={weather}
              dateConvertedTime={dateConvertedTime}
              />

              <DayFive
              weatherSvndys={weatherSvndys}  
              weFilter={weFilter}
              dateConverted={dateConverted}
              displayFull ={displayFull}
              hanleClick={hanleClick}
              weather={weather}
              dateConvertedTime={dateConvertedTime}
              />

              <DaySix
              weatherSvndys={weatherSvndys}  
              weFilter={weFilter}
              dateConverted={dateConverted}
              displayFull ={displayFull}
              hanleClick={hanleClick}
              weather={weather}
              dateConvertedTime={dateConvertedTime}
              />
          </div> 
          
           {/* FOOTER HERE  */}
          <div className="row">  
            <div className="col-lg-12 col-sm-12 ">  
            <div className="h6 text-light">
               Photo by <a href={pixWeather[0]?.pageURL} target="_blank" rel="noopener noreferrer" >{pixWeather[0]?.user} @pixbay.com</a>
            </div> 
            <div className="h6 text-light">
               Api(s) <a href={'https://openweathermap.org/'} target="_blank" rel="noopener noreferrer" >Open weather map</a>  <a href={'https://pixbay.com</'} target="_blank" rel="noopener noreferrer" >Pixbay</a>
            </div> 
            <div className="h6 text-light">
               App by <a href={'http://paulbarasa.co.ke'} target="_blank" rel="noopener noreferrer" >Paul Barasa</a>
            </div> 
            </div>
          </div>
      </div>
            </div>
          ) : ('')}
      </main>
    </div>
    </div>
  );
}

export default App;
