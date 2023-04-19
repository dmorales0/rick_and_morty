import { Link } from "react-router-dom";
import {addFav, removeFav} from '../../src/redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from "react";

function Card({name, species,gender,origin,image,id, addFav, remoFav, onclose}){

const [isFav, setIsfav] = useState(false);

const handleFavorite = () => {
   if(isFav){
      setIsfav(false);
      removeFav(id);
   }else{
      setIsfav(true);
      addFav({name, species,gender,id, image})
}
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if(fav.id === props.id){
         setIsfav(true);
      }
   });
},[myFavorites]);
return (
      <div> 
         {
            isFav ?(
               <button onClick={handleFavorite}>favorito</button>
            ) : (
               <button onClick={handleFavorite}>no favorito</button>
            )
         }
          <button onClick={() => onclose(id)}>X</button>
          <Link to={`/detail/${id}`}>
         <h2>nombre:{name} </h2>
         </Link>
        
         <h2>species:{species}</h2>
         <h2>gender:{gender}</h2>
         
         <img src={image} alt=''/>
      </div>
   );

   const mapStateToProps = (state) =>{
      return {
          myFavorites: state.myFavorites
      }
   }
 
const mapDispachToProps = (dispatch)=> {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      remoFav: (id) => {dispatch(removeFav(id))}
   }
}
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Card);
