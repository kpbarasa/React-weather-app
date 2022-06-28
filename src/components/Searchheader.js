import { FaInfoCircle } from "react-icons/fa";

const SearchHeader = ({onInput, query, search}) => {
    return ( 
     <> 
     <div className="search-box">
          <input type= "text" 
          className="search-bar" 
         //  autocomplete="off" autocorrect="off" autocapitalize="on"
          placeholder="Search: Countr, City, Town"
          onClick={e => onInput(e.target.value)} 
          onChange={e => onInput(e.target.value)}
          value={query} /> 
          <button className="btn bttn link text-light ml-4 d-none">
             <FaInfoCircle />  Help
          </button>
        </div> 
        {/* <div className="d-flex justify-content-end pb-1"> */}
           {/* <button className="btn bttn link text-muted ml-4"><FaTimes /> Clear</button> */}
           {/* <button className="btn bttn link text-light ml-4"><FaInfoCircle /> Help</button> */}
        {/* </div> */}
     </>
     );
}
 
export default SearchHeader;