// load the meals for a chosen category

import React from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';
import MealsNavigator from '../navigation/MealsNavigator'
// import console = require('console');

const CategoriesMealScreen = props => {
    console.log(props)
    return (
        <View style={Styles.screen}>
            <Text>The Category Meals Screen</Text>
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

const Styles =StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoriesMealScreen;