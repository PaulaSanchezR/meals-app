// set up some redux action, setting unique identifiers
// IDENTIFIER THAT WE EXPORT
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS'


// function that create the identifier
export const toggleFavorite = (id) =>{
    return { type:TOGGLE_FAVORITE, mealId:id}
}

// another action that 
export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters:filterSettings }
}