// the description of a singe meal: shows ingredientes and procedure for
// this meal

import React , { useEffect, useCallback }from 'react';
import {View,Image, StyleSheet,Text, Button, ScrollView} from 'react-native';
import { useSelector, useDispatch  } from 'react-redux'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../component/HeaderButton'
import DefaultText from '../component/DefaultText'
import { toggleFavorite } from '../store/action/meals'

// local components 
const ListItem = props =>{
    return(
        <View style={styles.ListItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}


const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId= props.navigation.getParam('mealId')
    
   
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
// we need to use dispathch to toggle the start
    const dispatch= useDispatch();

    const toggleFavoriteHandler = useCallback(() =>{
        dispatch(toggleFavorite(mealId))
    }, [dispatch , mealId])

    useEffect(() =>{    
        // we can use setParams to forthward the select meal or title to the header

        props.navigation.setParams({toggleFav:  toggleFavoriteHandler})
     },[toggleFavoriteHandler])

    
    return (
        <ScrollView> 
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
              <DefaultText>{selectedMeal.duration}m</DefaultText>
              <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
              <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View> 
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
          
        </ScrollView>
    )
};

MealDetailScreen.navigationOptions = navigationData => {

    // we can not use useSelector because is only avaliable for function componnents and this one itnt 
//   const mealId = navigationData.navigation.getParam('mealId');
//   this mealTitle is coming from the useEffect function
  const mealTitle= navigationData.navigation.getParam('mealTitle')
  const toggleFavorite = navigationData.navigation.getParam('toggleFav')
//   const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    // headerTitle: selectedMeal.title,
    headerTitle: mealTitle,
    headerRight: 
    (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title='Favorite' 
            iconName='ios-star' 
            onPress={toggleFavorite} />
    </HeaderButtons>)
  };
};

const styles =StyleSheet.create({
    
    details:{
        flexDirection: 'row',
        padding: 15,
        justifyContent:'space-around'
    },
    image:{
        width:'100%',
        height: 200
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign: 'center'
    },
    ListItem:{
        marginVertical: 5,
        marginHorizontal:20, // more space left to right
        borderColor: '#ccc',
        borderWidth:1,
        padding: 10
    }
})
export default MealDetailScreen;