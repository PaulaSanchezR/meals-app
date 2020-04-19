// load the meals for a chosen category

import React from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';
import MealsNavigator from '../navigation/MealsNavigator'
import { CATEGORIES } from '../data/dummy-data'



const CategoriesMealScreen = props => {
  const catId = props.navigation.getParam('categoryId')
//   find search on the array until it finds one where the element return true
// if the element is found, find return the element value
  const selectedCategory = CATEGORIES.find(cat=> cat.id === catId) 

    return (
        <View style={Styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='Go to Meals Detail' onPress={()=>{
                props.navigation.navigate({routeName:'MealDetail'})
                // props.navigation.push('MealDetail')
                // another alterartive to navigate like push if you need to go back
                // to the same screen you use push

            }}/>
            <Button title="Go back" onPress={()=>{
                props.navigation.goBack()
            }}/>

        </View>
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
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoriesMealScreen;