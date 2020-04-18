// Screen that holds our favory recepites

import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const FavoritesScreen = props => {
    return (
        <View style={Styles.screen}>
            <Text>The Favorites Screen</Text>
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
export default FavoritesScreen;