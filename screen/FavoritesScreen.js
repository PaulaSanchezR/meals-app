// Screen that holds our favory recepites

import React from 'react';
import { useSelector } from 'react-redux'
import { Text, View , StyleSheet} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../component/HeaderButton';
import MealList from '../component/MealList';
import DefaultText from '../component/DefaultText'


const FavoritesScreen = props => {
    // firs meals is locate on the rootreduer function
    // second meals es located on the store reducer meal. it is a propery
  const favMeals  = useSelector(state => state.meals.favoriteMeals)

  //const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  if (favMeals.length === 0 || !favMeals){
      return <View style={styles.content}><DefaultText>You have not select any favorite</DefaultText></View>
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles= StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        marginHorizontal: 75
    }
})

export default FavoritesScreen;
