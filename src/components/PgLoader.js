const PgLoader = ({loader}) => {
    return ( 
     <>
     
    <div className={loader === false ?"d-none app-bg  loader" : "app-bg loader "}>  
    <div className="lds-ripple-lay">
       <div className="lds-ripple"><div></div><div></div></div>
       <div className="loader-text"> Loading . . .</div>
    </div> 
    </div>
     </>
     );
}
 
export default PgLoader;

