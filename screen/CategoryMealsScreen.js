// load the meals for a chosen category

import React from 'react';
// we remove MEALS and add useSelector Hook
import { useSelector } from 'react-redux'
import {View, StyleSheet,Text, FlatList,} from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import MealItem from '../component/MealItem'
import MealList from '../component/MealList'


const CategoriesMealScreen = props => {
 
  const catId = props.navigation.getParam('categoryId')
  // this state will check on the store app.js and bring the meals state
  // filteredMeals is a property of the initalState
  const availalbeMeals=useSelector(state => state.meals.filteredMeals)
  const displayMeals = availalbeMeals.filter(
    //   it will be -1 if catId is not part of the categoryIds 
    // if its 0 o greater we know that is part of the categoryId
      meal => meal.categoryIds.indexOf(catId) >= 0
   );

    return (
       <MealList listData={displayMeals} navigation={props.navigation}/>
    )
    }
// navigationOptions can be an object if you have a 
// static hard code configuration values but also can be
// a function if you need a dinamic configuration that 
// depends on changing data 
CategoriesMealScreen.navigationOptions = (navigationData) =>{
    const catId=navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat=> cat.id === catId) 
    return {
        headerTitle: selectedCategory.title        
    }
}

const Styles =StyleSheet.create({
   
})
export default CategoriesMealScreen;