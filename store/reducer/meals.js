

import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../action/meals';



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

          case SET_FILTERS:
            // update to our filters meals to reflect the filters set up
            const appliedFilters = action.filters;
            // filter always return a new array
            const updatefilteredMeals = state.meals.filter(meals => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian){
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false;
                }
                return true; // will return the meal
            });
            // I need to return the all state and I will overight my filterMeals with 
            return {...state, filteredMeals:updatefilteredMeals}
        default:
        return state;
    }
    return state;
}

export default mealsReducer;