// set my navigation configuration I want to specify what 
// diffent screens and how they are conected and how I want to see to move between them

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import CategoriesScreen from '../screen/CategoriesScreen'
import CategoryMealsScreen from '../screen/CategoryMealsScreen'
import MealDetailScreen from '../screen/MealsDetailScreen'

const MealNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals:{
      screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
})

// appcontainer you wrap your root main navigator 
export default createAppContainer(MealNavigator);