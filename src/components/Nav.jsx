import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) =>{
    return(
        <nav>
          <SearchBar onSearch={onSearch}/>
          
            <Link to='/about'>ABOUT</Link>
               <Link to='/home'>Home</Link>
               <Link to='/favorites'>favorites</Link>
         
        </nav>
    )
}

export default Nav  