import { Link } from "react-router-dom";
import {addFav, remoFav} from '../../src/redux/actions';
import {connect} from 'react-redux';

export default function Card({name, status,species,gender,origin,image, id, onclose} ) {
   return (
      <div> 
          <button onClick={() => onclose(id)}>X</button>
          <Link to={`/detail/${id}`}>
         <h2>nombre:{name} </h2>
         </Link>
         <h2>status:{status}</h2>
         <h2>species:{species}</h2>
         <h2>gender:{gender}</h2>
         <h2>origin:{origin}</h2>
         <img src={image} alt=''/>
      </div>
   );
}
