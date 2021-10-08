const PgLoader = ({loader}) => {
    return ( 
     <>
     
    <div className={loader === false ?"cool d-none loader" : "cool loader"}>  
    <div className="lds-ripple-lay">
       <div class="lds-ripple"><div></div><div></div></div>
    </div> 
    </div>
     </>
     );
}
 
export default PgLoader;

