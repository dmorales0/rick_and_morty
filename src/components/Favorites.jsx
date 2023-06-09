import Card from "./Card"
import { Connect, connect } from "react-redux"

const Favorites = ({myFavorites})=> {
    return (
        <>
         {
            myFavorites?.map(fav =>{
               return(
                <Card
                   key={fav.id}
                   id={fav.id}
                   name={fav.name}
                   species={fav.species}
                   gender={fav.gender}
                   image={fav.image}
                />

               )
            })
         }
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        myfavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);