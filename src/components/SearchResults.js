import React, { useState, useEffect } from "react";

import { FaRegWindowMinimize, FaSearchLocation,FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
const SearchResults = ({setRestTown, hideResult,setHideResult, restCountry, query, srchAll, setShowTwnSrch, showTwnSrch, searchTown2, setQueryTwn,queryTwn, restTown, resContTtl, setResContTtl, weather}) => {
  
  const [showLoader, setShowLoader] = useState(false);
  const showTitle = (i, j) => {
    searchTown2(i);
    setResContTtl(j);
    setShowLoader(true);
    
    setInterval(() => { 
      setShowLoader(false);
    }, 5000);
    setRestTown([]);
  }
  const clear = () => {
    // searchTown2("");
    // setResContTtl("");
    setQueryTwn("");
  }
    return ( 
     <>
     <div className="col-lg-12">
        <div id="resultCard" className={hideResult === true ? " fade-down d-none":" fade-down d-block" }>

          <div className="row">
            <button id="closeResutls" type="button" className onClick={() => setHideResult(true)} className="closeResultCard">
              <FaTimes />
            </button>
            <div className="col-lg-3 col-6 country p-0">
               <div className="">
              <div className=" res-header"> 
                <div className="container"> 
                <div className="row">
                <div className="col-auto p-0 m-0"> 
                  <h5 className="m-1 pl-4">Country </h5> 
                </div> 
                </div>
                </div>
                {/* <div className="col-6 p-0 m-0 res-header"> 
                  <div className="input-group">
                    <input type="text" 
                      className="form-control"  
                      placeholder="Search" 
                      name="searchCount"
                      // onClick={e => onInput(e.target.value)}
                      onChange={e => onInput(e.target.value)} 
                    />
                    <button className="input-group-text"><FaTimes /></button>
                  </div>
                 </div>  */}

              </div>

                 <div className="resultCardCountry">
                 {restCountry.filter(items => items.name.includes(query)).map((country, index) =>     
                   <div key={country.id} className="text-left mb-3 border-bottom">  
                      <button className="btn btn-link m-0 p-0 d-block" onClick={() => srchAll(country.name)} > &nbsp;
                          {country.name},
                           &nbsp; <span className="m-0 p-0"> <b> {country.iso2} </b> </span>
                      </button> 
                      <span className="btn btn-link d-block text-left" onClick={() => showTitle(country.iso2, country.name)}> <small><FaMapMarkerAlt /> View Towns</small></span>
                   </div>
                 )}
                 </div>
               </div>
            </div>
            
            <div className="col-lg-9 col-6 p-0">

              <div className={showLoader === true ? restTown.length === 0 ?" loader" : "d-none loader" : "d-none"}>
                <div className="loader ">  
                  <div className="lds-ripple-lay">
                    <div class="lds-ripple"><div></div><div></div></div>
                    <h6>Loading</h6>
                  </div> 
                </div>
              </div>

              <div className=" res-header"> 

                <div className="container">
                  <div className="row">  
                <div className="col-2 p-0 m-0"> 
                  <h5 className="m-1">City/Town </h5>  
                </div> 

                <div className="col-auto p-0 m-0 mb-show"> 
                  <h5 className="m-1">
                    {resContTtl}  
                    <button onClick={() => setShowTwnSrch(false)} className={showTwnSrch === true ? "mr-4" : "d-none"} ><FaSearchLocation /></button>
                  </h5>  
                </div>

                <div id="demo"  className={showTwnSrch === false ? "col-6 p-0 m-0 mb-show" : "col-6 p-0 m-0 mb-show d-none"}> 
                  <div className="input-group">
                    <input type="text" 
                      className="form-control"  
                      placeholder="Search" 
                      // onClick={e => onInput(e.target.value)}
                      onChange={e => setQueryTwn(e.target.value)}
                      value={queryTwn} 
                    />
                    <button  type="button" className onClick={() => clear()} className="cinput-group-text">
                      Clear
                    </button>
                    <button onClick={() => setShowTwnSrch(true)} className="input-group-text"><FaTimes /></button>
                  </div>
                </div>  

                  </div> 
                </div>

 

              </div>

                 <div className="resultCity"> 
                 <div className="row">
                   
                   <div className={restTown.length === 0 ?" show ml-4" : "d-none "}>
                   <h6><b>{restTown.length}</b> Towns found</h6>
                   </div>
                 {restTown.filter(items => items.name.includes(queryTwn)).map((country, index) =>  
                  <div className="col-lg-4 col-md-6 col-sm-12 pull-right"> 
                   <div key={country.id} className="text-left">  
                          <button className="btn btn-link p-0 d-block" onClick={() => srchAll(country.name)} > <FaMapMarkerAlt /> &nbsp;
                          {country.name},
                           &nbsp; <span className=""> {country.iso2}</span>
                   </button>  
                    <br />
                    </div>
                  </div>   
                 )}
                 </div>
                 </div>

            </div>

          </div>

        </div>
        </div>
     </>
     );
}
 
export default SearchResults;