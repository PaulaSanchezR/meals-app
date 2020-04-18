// Categories is where you selecte what kind 
// of food like italian, american , mexican

import React from 'react';
import {View, StyleSheet,Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen = props => {
    const renderGridItem =(itemData) =>{
        return (
            <TouchableOpacity 
                style={Styles.gridItem}
                onPress={()=>{
                    props.navigation.navigate({routeName : 'CategoryMeals'})
                }}>
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // function are objects and you can access the function as a property

    CategoriesScreen.navigationOptions ={
        headerTitle:'Meal Categories'
    }

  return (
      <FlatList 
            keyExtractor={(item,index)=>item.id} 
            data={ CATEGORIES } 
            renderItem={renderGridItem} 
            numColumns={2}
      />
    )
}

const Styles =StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1, // to get much space that I can get
        margin:15,
        height:150
    }
})
export default CategoriesScreen;
