// the description of a singe meal: shows ingredientes and procedure for
// this meal

import React from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../component/HeaderButton'


const MealDetailScreen = props => {
    const mealId= props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
        <View style={Styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go back to Categories Meals" onPress={()=>{
                props.navigation.goBack()
            }}/>
            <Button title="Go back to Categories" onPress={()=>{
                props.navigation.popToTop()
            }}/>
        </View>
    )
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: 
    (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title='Favorite' 
            iconName='ios-star' 
            onPress={()=>{
              console.log('Mark as Favorite')
        }} />
    </HeaderButtons>)
  };
};

const Styles =StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default MealDetailScreen;