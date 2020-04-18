// the description of a singe meal: shows ingredientes and procedure for
// this meal

import React from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={Styles.screen}>
            <Text>The Meals Details Screen</Text>
            <Button title="Go back to Categories Meals" onPress={()=>{
                props.navigation.goBack()
            }}/>
            <Button title="Go back to Categories" onPress={()=>{
                props.navigation.popToTop()
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
export default MealDetailScreen;