

import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../action/meals';


const initialState ={
    meals:  MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case TOGGLE_FAVORITE:
    // I will check if the id exist on the favortiteMeal array, if does not exist I want to add, if exist I want to remove it
    // if the index is -1 wasnt part of the array
    // if the indes is grater or = 0 it is part of the array
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0 ){
                // create a copy of the array
                const updateFavMeals = [...state.favoriteMeals]
                updateFavMeals.splice(existingIndex,1) // splice remove the item  
                // the id is part of the favorites meal and we need to remove it...
                return {...state,favoriteMeals: updateFavMeals}
            }else{
                const meal= state.meals.find(meal => meal.id === action.mealId)
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        default:
        return state;
    }
    return state;
}

export default mealsReducer;