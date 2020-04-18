// allows to filter like vegan food or gluten free

import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const FiltersScreen = props => {
    return (
        <View style={Styles.screen}>
            <Text>The Filters Screen</Text>
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
export default FiltersScreen;