
import React, { useState } from "react"; 

const WeatherCardTitle  = ({tittle, subtitle, cLass, iCon, description, tTId}) => { 
    
    const [testdID, setTestdID] = useState('');
    
    function setTooltips(id){
        if(testdID === ""){
            // setTestdID(id) 
            setTestdID(id) 
        }
    }
    
    function removeTooltips(){
        if(testdID !== ""){
            // setTestdID(id) 
            setTestdID('') 
        }
    }

    return ( 
        
        <>
        
        <div className='col-12'> 
            <a id={"my-tooltip"} onMouseOver={() => setTooltips(tTId)} onMouseOut={() => removeTooltips()}  className={cLass} href="#" > {iCon}  {tittle} 
                <div  className={testdID === tTId ? description === "" ? "d-none" : "myTooltip" : "d-none"}>
                    <div className={"myTooltip-desc"}>
                         <span className ="text-muted">{description}</span>
                    </div>
                </div>
                <small className={cLass !== "d-block card-tittle" ? "d-none" : "d-block text-muted h6"}>
                    {subtitle}
                </small>
            </a> 
        </div>
        </>
     );
}
 
export default WeatherCardTitle;