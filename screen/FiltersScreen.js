// allows to filter like vegan food or gluten free

import React,{ useState, useEffect,useCallback} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../component/HeaderButton';
import Colors from '../constants/Colors'


const FilterSwitch = props =>{
    return(
         
      <View style={styles.filterConteiner}>
        <Text>{props.label}</Text>
        {/* switch has this two properties value and onvaluechange */}
        <Switch 
            trackColor={{true:Colors.primaryColor}}
            thumbColor={Colors.plain}
            value={props.state} 
            onValueChange={props.onChange}/>
      </View>
    )
}

const FiltersScreen = props => {
    // 
    const { navigation } = props
    const [isGluetenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setLactoseFree] = useState(false)
    const [isVegan, setVegan] = useState(false)
    const [isVegetarian, setVegetarian] = useState(false)

    // we need to pass our inf state to another page and the state 
    // is only availabe on the filterscreen component
// useCallback helps to wrap the function so this function is only catch by react and it is only 
// recreated if only its dependencis change
    const saveFilter=useCallback(() =>{
        const appliedFilters ={
            glutenFree:isGluetenFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            isVegetarian:isVegetarian
        };
        console.log(appliedFilters)
    },[isGluetenFree,isLactoseFree,isVegan,isVegetarian]) // -> useCallBack take a second argument 
          // and array of dependencis 
          // the function only could recreate if the depencies change 



// useEffect exacute code where ever our state changes becouse there is when we want to forthward
// my state data
// take a function wherever our sate render 
useEffect(()=>{
    // we can use set to update the currently load screen
    // we only ponting the function no excecute the function
    // props.navigation.setParams({save:saveFilter})
    navigation.setParams({save:saveFilter})
    // ^
    // |
    // to avoid innecesari render values we use object destructring at the top
},[saveFilter])
    // ^
    // |
    // this second argument is because the useEffect only run when saveFilter has a value
    // the secon argument is an array of dependencis and props is a dependenci
    return (
        <View style={styles.screen}>
         <Text style={styles.title}>Available Filters/ Restrictions</Text>
         <FilterSwitch 
            label="Gluten-Free" 
            state={isGluetenFree} 
            onChange={newValue => setIsGlutenFree(newValue)}
         />
         <FilterSwitch 
            label="Lactose-Free"
            state={isLactoseFree} 
            onChange={newValue => setLactoseFree(newValue)}
         />
         <FilterSwitch 
            label="Vegan" 
            state={isVegan} 
            onChange={newValue => setVegan(newValue)}
         />
         <FilterSwitch 
            label="Vegetarian" 
            state={isVegetarian} 
            onChange={newValue => setVegetarian(newValue)}
         />
        
        </View>

  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
        //   onPress={() => {
        //     //   the save value is on the useEffect function
        //     navData.navigation.getParam('save')
        //   }}
        onPress={ //-> we bind onPress the to the result of the retriving our pointer
            // we need to execute no just pointe to it
            navData.navigation.getParam('save')
        }
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterConteiner:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignContent:'center',
    width:'80%',
    marginVertical:10
  },
  title:{
      fontFamily:'open-sans-bold',
      fontSize: 22,
      margin:20,
      textAlign:'center'
  }
});

export default FiltersScreen;