import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentDay from "./components-days/CurrentDay";
import SevenDays from "./components-days/sevenDays";  
import Error403Msg from "./components/Error403Msg";
import PgLoader from "./components/PgLoader";
import SearchResults from "./components/SearchResults";
import SearchHeader from "./components/Searchheader";
import { dateConverted, dateConvertedTime, dateConvertedTimeHH, dateConvertedTimeMM, dateConvertedTimeHours } from './components/functions.components';
import LayoutFooter from './components-layout/Layout-footer';


const api = {
  key: "367957db0221fc406eadcf689ee2057c",
  base: "https:api.openweathermap.org/data/2.5/"
}
const pixbayApi = {
  key: "22381867-aadddc0f591e04750006c3ce6",
  base: "https://pixabay.com/api/"
}

function App() {
  // Error message(Error403Msg.js)
  const [errorMsg, setErrorMsg] = useState(false);

  // Main search box value
  const [query, setQuery] = useState('');

  // Results search box value
  const [queryTwn, setQueryTwn] = useState('');

  // Container for background pictures from pixbay  weather results 
  const [pixWeather, setPixWeather] = useState({});

  // Container for current weather results 
  const [weather, setWeather] = useState({})

  // Container for Daily weather results 
  const [weatherSvndys, setWeatherSvndys] = useState({})

  // Container for Hourly weather results 
  const [weatherHrly, setWeatherHrly] = useState([])

  // Container for Selected weather card value
  const [activeCard, setActiveCard] = useState('')

  // If = TRUE display page loader
  const [loader, setLoader] = useState(false);

  // If = TRUE toggle togglesearch results card(searchResults.js)
  const [hideResult, setHideResult] = useState(true);

  // If = TRUE toggle weather info card to full 
  const [displayFull, setDisplayFull] = useState(true);

  // If = TRUE show town search 
  const [showTwnSrch, setShowTwnSrch] = useState(true);
  const [weFilter, setWeFilter] = useState('');
  const [resContTtl, setResContTtl] = useState('');
  const [restCountry, setRestCountry] = useState([]);
  const [restTown, setRestTown] = useState([]);

  const loadingScreen = () => {
    setLoader(true);
    setInterval(() => {
      if (document.readyState === 'complete') {
        setLoader(false);
        clearInterval();
        // document ready
      }
    }, 10000);
  }
  // =================================================================================================================================================
  // =================================================================================================================================================
  // FUNCTIONS  START HERE: ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // =================================================================================================================================================
  // MAIN SEARCH FUNCTION 
  // RETURNS:
  // 1. SEATRCH TOWN (FetchTownData())
  //    -> FETCH REQUEST to get Country Towns/Cities here 

  // 2. SEATRCH TOWN (FetchCountryData())
  //    -> FETCH REQUEST to get Country Names here 

  // 3. SEARCH ALL (srchAll())
  //    -> setQuery 
  //    -> setHideResult 

  // 4. SEARCH (search)
  //    -> City / Country image data from pixbay 
  //    -> Country/City/TOwn Current weather information Accuweather
  //    -> Country/City/TOwn 7 DayS Weather information Accuweather 
  //    -> Country/City/TOwn Historical Weather information Accuweather 

  // 0. Get daily Weather 
  const getDailyWeather = () => {
    const latitude = 0;
    const longitude = 0;
    const getLocation = {
      lat: latitude,
      lon: longitude
    }
    fetch(`${api.base}onecall?lat=${getLocation.lat}&lon=${getLocation.lon}&daily&appid=${api.key}&units=metric`)
      .then(res => res.json())
      .then(result => {
        setWeatherSvndys(result);
        setQuery('');
      })
      .catch((error) => {
        console.log('error: ' + error);
        setDisplayFull(false);
        setErrorMsg(true);
      });
  }
  // 1. SEATRCH TOWN DATA
  const FetchTownData = (i) => {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "QmIxRWk2alcwWENlRFNKck5MdWVuQWQ5Um5FTEtFS0toTG4xWlBhVQ==");

    var requestOptions = {
      headers: headers
    };


    // FETCH REQUEST to get Country Towns/Cities here 
    fetch("https://api.countrystatecity.in/v1/countries/" + i + "/cities", requestOptions)
      .then(res => res.json())
      .then(res => {
        console.log("Countries, cities, Towns")
        console.log(res);
        setRestTown(res);
      })
      .catch((error) => {
        console.log('error: ' + error);
        setDisplayFull(false);
        setErrorMsg(true);
      });
  }

  // 2. SEARCH COUNTRY DATA
  const FetchCountryData = () => {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "QmIxRWk2alcwWENlRFNKck5MdWVuQWQ5Um5FTEtFS0toTG4xWlBhVQ==");

    var requestOptions = {
      headers: headers
    };

    // FETCH REQUEST to get Country Names here 
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then(res => res.json())
      .then(res => {

        console.log(res);

        setRestCountry(res);

      })
      .catch((error) => {
        console.log('error: ' + error);
        setDisplayFull(false);
        setErrorMsg(true);
      });
  }

  // 3. SEARCH ALL
  const srchAll = (i) => {
    try {
      setQuery(i);
      setHideResult(true);
  
      return FetchWeatherdata(i);
      
    } catch (error) {
        console.log('error: ' + error);
        setDisplayFull(false);
        setErrorMsg(true);
      
    }
  }


  // 4. SEARCH

  const FetchWeatherdata = async (i) => {

    loadingScreen()
    setHideResult(true)
    setDisplayFull(true)

    // 1. City / Country image data from pixbay 
    await fetch(`${pixbayApi.base}/?key=${pixbayApi.key}&q=${i}`)
      .then(res => res.json())
      .then(result => {
        setPixWeather(result.hits);
        // console.log(pixWeather);
      })
      .then(res => {
        document.querySelector('#main-holder').style.background = "" + pixWeather[0]?.largeImageURL + ""
      })
      .catch((error) => {
        console.log('error: ' + error);
        setDisplayFull(false);
        setErrorMsg(true);
      });

    // 2. Country/City/TOwn COUNTRYWeather information Accuweather
    fetch(`${api.base}weather?q=${i}&units=metric&APPID=${api.key}`)
      .then(res => {
        if (!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .then(result => {
        setWeather(result)
        setQuery('');

        console.log("weather")
        console.log(weather)

        const latitude = result.coord.lat;
        const longitude = result.coord.lon;

        const getLocation = {
          lat: latitude,
          lon: longitude
        }

        // 3. Country/City/TOwn 7 DayS Weather information Accuweather 
        fetch(`${api.base}onecall?lat=${getLocation.lat}&lon=${getLocation.lon}&daily&appid=${api.key}&units=metric`)
          .then(res => res.json())
          .then(result => {
            setWeatherSvndys(result)
            setQuery('');
            console.log("7 days Weather response")
            console.log(weatherSvndys)
          })
          .then(result => {

            // 4. Country/City/TOwn Hourly Weather information Accuweather   
            fetch(`${api.base}onecall?lat=${getLocation.lat}&lon=${getLocation.lon}&daily&appid=${api.key}&units=metric`)
              .then(res => res.json())
              .then(result => {
                setWeatherHrly(result.hourly)
                console.log("HOURLY");
                console.log(result.hourly);
              })
              .catch((error) => {
                console.log('error: ' + error);
                setDisplayFull(false);
                setErrorMsg(true);
              });
          })
          // .then(res => {

          //   // 5. Country/City/Town Historical Weather information Accuweather   
          //   fetch(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${getLocation.lat}&lon=${getLocation.lon}&dt=1649555630&appid=${api.key}`)
          //     .then(res => res.json())
          //     .then(res => {
          //       // setWeatherHrly(res)
          //       console.log("Historicat data");
          //       console.log(result);
          //     })
          //     .catch((error) => {
          //       console.log('error: ' + error);
          //       setDisplayFull(false);
          //       setErrorMsg(true);
          //     });
          // })
          // .then(res => {

          //   // 6. Country/City/Town Statistical Weather information Accuweather   
          //   fetch(`https://history.openweathermap.org/data/2.5/aggregated/year?lat=${getLocation.lat}&lon=${getLocation.lon}&appid=${api.key}`)
          //     .then(res => res.json())
          //     .then(res => {
          //       // setWeatherHrly(res)
          //       console.log("Statistical data");
          //       console.log(result);
          //     })
          //     .catch((error) => {
          //       console.log('error: ' + error);
          //       setDisplayFull(false);
          //       setErrorMsg(true);
          //     });
          // })
          .catch((error) => {
            console.log('error: ' + error);
            setDisplayFull(false);
            setErrorMsg(true);
          });

      })
      .catch((error) => {
        console.log('error: ' + error);
        setDisplayFull(false);
        setErrorMsg(true);
      });
  }

  const FetchTownData2 = (i) => {
    FetchTownData(i);
  }

  // INPUT FUNCTION Input from Search Text box (SearchHeader.js)
  const onInput = (i) => {
    setQuery(i);
    setHideResult(false);
  }

  // Handles when small when the card is clicked  to enlage it to Small 
  const displaySmall = (e) => {
    setDisplayFull(true);
  }

  // Handles when small when the card is clicked  to enlage it to large 
  const hanleClick = (e) => {
    setWeFilter(e);
    setDisplayFull(false);
  }

  // =================================================================================================================================================
  // FUNCTIONS  END HERE: ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // =================================================================================================================================================
  // =================================================================================================================================================

  useEffect(() => {
    loadingScreen();
    FetchCountryData();
    getDailyWeather();
    setActiveCard(0)
  }, []);



  return (
    <div id="main-holder" className="city-bg" style={{ background: 'url("' + pixWeather[0]?.largeImageURL + '") ' }}>


      <Error403Msg errorMsg={errorMsg} setErrorMsg={setErrorMsg} query={query} />

      <PgLoader loader={loader} />

      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <main>
          {/* Search header  Here  */}
          <SearchHeader
            onInput={onInput}
            query={query}
            search={FetchWeatherdata}
          />



          {/* SEARCH RESULT CARD  */}
          <SearchResults
            // FUNCTIONS
            srchAll={srchAll}
            FetchTownData2={FetchTownData2}

            // DATA
            query={query}

            // DATA CONTAINERS
            queryTwn={queryTwn}
            restTown={restTown}
            restCountry={restCountry}
            setQueryTwn={setQueryTwn}
            hideResult={hideResult}
            setHideResult={setHideResult}
            resContTtl={resContTtl}
            setResContTtl={setResContTtl}
            showTwnSrch={showTwnSrch}
            setShowTwnSrch={setShowTwnSrch}
          />

          {(typeof weather.main != "undefined") ? (
            <div>
              {/* <helpComponenet />  */}

              <div className="">

                {/* WEATHER LARGE CARD  */}
                {(displayFull ?
                  <CurrentDay
                    //  FUNCTIONS 
                    setActiveCard={setActiveCard}
                    dateConverted={dateConverted}
                    dateConvertedTime={dateConvertedTime}
                    dateConvertedTimeHH={dateConvertedTimeHH}
                    dateConvertedTimeMM={dateConvertedTimeMM}
                    dateConvertedTimeHours={dateConvertedTimeHours}

                    //  DATAT  
                    loader={loader}
                    weather={weather}
                    weatherHrly={weatherHrly}
                    activeCard={activeCard}
                    displayFull={displayFull}
                    weatherSvndys={weatherSvndys}
                    weFilter={weFilter}
                    hanleClick={hanleClick}
                  />
                  : null
                )}

                <SevenDays 
                    //  FUNCTIONS 
                    displaySmall={displaySmall}
                    setActiveCard={setActiveCard}
                    dateConverted={dateConverted}
                    dateConvertedTime={dateConvertedTime}
                    dateConvertedTimeHH={dateConvertedTimeHH}
                    dateConvertedTimeMM={dateConvertedTimeMM}
                    dateConvertedTimeHours={dateConvertedTimeHours}

                    //  DATAT  
                    loader={loader}
                    weather={weather}
                    weatherHrly={weatherHrly}
                    activeCard={activeCard}
                    displayFull={displayFull}
                    weatherSvndys={weatherSvndys}
                    weFilter={weFilter}
                    hanleClick={hanleClick}
                    />


                {/* FOOTER HERE  */}\
                <LayoutFooter BackgroundImgLink={pixWeather[0]?.user} BackgroundImgURL={pixWeather[0]?.pageURL} />
              </div>
            </div>
          ) : ('')}
        </main>
      </div>
    </div>
  );
}

export default App;
