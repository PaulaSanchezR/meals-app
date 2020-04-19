// Categories is where you selecte what kind 
// of food like italian, american , mexican

import React from 'react';
import {View, StyleSheet,Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../component/CategoryGridTile'

const CategoriesScreen = props => {
    const renderGridItem =(itemData) =>{
        return (
            // we need to pass some data to navigate
            // we pass a function that we can navigate
          <CategoryGridTile
          title={itemData.item.title} 
          color={itemData.item.color}
          onSelect={() =>{
            props.navigation.navigate({
                routeName : 'CategoryMeals', 
                params:{
                    categoryId: itemData.item.id
                }
           })
          }} />
        )
    }

    // CategoriesScreen is a Javascript object
    // and we can add a property after creating 
    // special propererty navigationOptions

    // CategoriesScreen.navigationOptions = {
    //     headerTitle:'Meal Categories'
    //  }

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
    }
    
})
export default CategoriesScreen;
