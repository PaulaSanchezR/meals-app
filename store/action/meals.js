// set up some redux action, setting unique identifiers

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

// function that create the identifier
export const toggleFavorite = (id) =>{
    return { type:TOGGLE_FAVORITE, mealId:id}
}