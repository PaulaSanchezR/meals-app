// Categories is where you selecte what kind 
// of food like italian, american , mexican

import React from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';
// import console = require('console');

const CategoriesScreen = props => {
    // console.log(props)
    return (
        <View style={Styles.screen}>
            <Text>The Categories Screen</Text>
            <Button title='Go to Meals' onPress={() =>{
                 props.navigation.navigate({routeName:'CategoryMeals'})
                // under the  hook under the stack when I press the back buttom 
                // pops the screen from the stack 
               
                // we can replace the screen instead of getting the screen from the stack 
                // props.navitation.replace('CategoryMeals')
                // this is use on the login screen
            }} />
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
export default CategoriesScreen;
