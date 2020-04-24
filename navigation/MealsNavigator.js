// set my navigation configuration I want to specify what 
// diffent screens and how they are conected and how I want to see to move between them
import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import CategoriesScreen from '../screen/CategoriesScreen'
import CategoryMealsScreen from '../screen/CategoryMealsScreen'
import MealDetailScreen from '../screen/MealsDetailScreen'
import FavoritesScreen from '../screen/FavoritesScreen'
import FiltersScreen from '../screen/FiltersScreen'

const defaultStackNavOptions ={
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
          },
     headerTitleStyle:{
        fontFamily:'open-sans-bold'
     },   
     headerBackTitleStyle:{  // backtext is for ios
        fontFamily:'open-sans'
     },  
     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}
// *****************************************************************
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
    defaultNavigationOptions: defaultStackNavOptions
});


// *******************************************************
// 
const FavNavigator= createStackNavigator({
    Favorites:FavoritesScreen,
    MealDetail: MealDetailScreen
},
{ // second argument 
    // default options overwritte to options
    defaultNavigationOptions: defaultStackNavOptions
}
)

// ***************************************************************
// botton menu
const tabScreenConfig = {
    Meals: { screen:MealNavigator, navigationOptions:{
        // tabBarLabel:'Categories Meals', //if you want a different name
        tabBarIcon:(tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        },
        // tabBarColor: Colors.plain

        tabBarLabel: Platform.OS ==='android' ?<Text style={{fontFamily:'open-sans-bold'}}>Meals</Text>:'Meals'
    } 
},
    Favorites: { screen:FavNavigator, navigationOptions:{
        tabBarIcon:(tabInfo) => {
           return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        },
        tabBarLabel: Platform.OS ==='android' ? <Text style={{fontFamily:'open-sans-bold'}}>Favorites</Text> : 'Favorites'


    }
 }
}
// the MealNavigator is nested here you can combine multiple navitator
// we going to use material botton tab for android
const MealsFavTabNavigator = Platform.OS === 'android' 
? createMaterialBottomTabNavigator(tabScreenConfig , {
    activeTintColor: 'white',
    shifting: false,
    barStyle:{
        backgroundColor: Colors.plain
    }
}) 
: createBottomTabNavigator(tabScreenConfig ,{
        tabBarOptions:{
          labelStyle:{ // this option only works on ios for android you need to do it on the button tap
              fontFamily: 'open-sans-bold'
          },   
          activeTintColor: Colors.primaryColor
        }
    }
 );

 const FiltersNavigator = createStackNavigator(
    {
      Filters: FiltersScreen
    },
    {
      // navigationOptions: {
      //   drawerLabel: 'Filters!!!!'
      // },
      defaultNavigationOptions: defaultStackNavOptions
    }
  );


//  Drawer navigations

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen:MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
},{
    contentOptions: {
        activeTintColor:Colors.secondaryColor,
        labelStyle:{
            fontFamily: 'open-sans'
        }
    }
})

// appcontainer you wrap your root main navigator 
export default createAppContainer(MainNavigator);