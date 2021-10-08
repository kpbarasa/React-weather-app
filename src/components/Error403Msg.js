const Error403Msg = ({errorMsg, setErrorMsg, query}) => {
    return ( 
     <>
     <center> 
      <div id="errorMsg" className={errorMsg === true ? "show col-lg-12 fade-in " : "d-none"}  > 
          <div className="errorContent" style={{ background: 'url("https://image.freepik.com/free-vector/monster-404-error-concept-illustration_114360-5485.jpg") '}}>
            <div className="col-lg-12 errorTop"> 
               <h1 className="d-none">
                     <b>Sorry</b>
                    <span className="h5 d-block">Could not retrieve info</span>
               </h1> 
            </div>
            <div className="col-lg-12 errorBottom"> 
               <span className="h5 d-block text-dark">Could not retrieve info for <span className="text-info">"{query}"</span>.</span> 
               <h6 className=""> <button className="btn btn-dark btn-lg" onClick={() => window.location.reload()}> Try again</button> </h6>
            </div>
          </div> 
        
         
        </div>
     </center>
     </>
     );
}
 
export default Error403Msg;

