import {ADD_FAV, REMOVE_FAV} from './actions-types'

export const addFav = (character) => {
    return {type: ADD_FAV, Payload: character}
};
export const removeFav = (id) => {
    return {type: REMOVE_FAV, Payload: id }
}