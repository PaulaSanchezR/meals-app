// Screen that holds our favory recepites

import React from 'react';
import { useSelector } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../component/HeaderButton';
import MealList from '../component/MealList';


const FavoritesScreen = props => {
    // firs meals is locate on the rootreduer function
    // second meals es located on the store reducer meal. it is a propery
  const favMeals  = useSelector(state => state.meals.favoriteMeals)

  //const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
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

export default FavoritesScreen;
