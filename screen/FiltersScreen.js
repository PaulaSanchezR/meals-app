// allows to filter like vegan food or gluten free

import React,{ useState} from 'react';
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
    const [isGluetenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setLactoseFree] = useState(false)
    const [isVegan, setVegan] = useState(false)
    const [isVegetarian, setVegetarian] = useState(false)
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