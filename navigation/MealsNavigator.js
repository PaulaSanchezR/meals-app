// set my navigation configuration I want to specify what 
// diffent screens and how they are conected and how I want to see to move between them
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Colors from '../constants/Colors'

import CategoriesScreen from '../screen/CategoriesScreen'
import CategoryMealsScreen from '../screen/CategoryMealsScreen'
import MealDetailScreen from '../screen/MealsDetailScreen'

// createStackNavigator use two arguments 
// firs argument are the screens object
// second argument is the defaultnavitation objects that apply to every 
// screen
const MealNavigator = createStackNavigator({
  Categories: { // use the first key value pair as default
      screen:CategoriesScreen,
      navigationOptions:{
        headerTitle:'Meal Categories', 
       }  
      },
  CategoryMeals:{
      screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen
},
{ // second argument 
    // default options overwritte to options
    defaultNavigationOptions:{
       headerStyle:{
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
       headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
         
    }
})

// appcontainer you wrap your root main navigator 
export default createAppContainer(MealNavigator);