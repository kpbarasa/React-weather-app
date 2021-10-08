import { FaInfoCircle } from "react-icons/fa";

const SearchHeader = ({onInput, query, search}) => {
    return ( 
     <> 
     <div className="search-box">
          <input type= "text" 
          className="search-bar" 
          autocomplete="off"
          autocomplete="off" autocorrect="off" autocapitalize="on"
          placeholder="Search Town, City or Country"
          onClick={e => onInput(e.target.value)} 
          onChange={e => onInput(e.target.value)}
          value={query}
          onKeyPress={search} /> 
          <a className="btn bttn link text-light ml-4 d-none">
             <FaInfoCircle />  Help
          </a>
        </div> 
     </>
     );
}
 
export default SearchHeader;