import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'

const MealItem = props =>{
    return(
       <View style={styles.mealItem}>
       <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
               <ImageBackground source={{uri: props.image}} style={styles.bgImage} >                    
                <Text style={styles.title}>
                    {props.title}
                </Text>
               </ImageBackground> 
            </View >
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
              <Text>{props.duration}m</Text>
              <Text>{props.complexity.toUpperCase()}</Text>
              <Text>{props.affordability.toUpperCase()}</Text>
              
            </View>
        </View>
      </TouchableOpacity> 
       </View> 
     )
}

const styles= StyleSheet.create({
    mealRow:{
        flexDirection: 'row',

    },
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealHeader:{
        height: '90%',
   },
   mealDetail:{
        paddingHorizontal: 10,
        justifyContent:'space-between' // it is a row justify horizontaly
   },
   bgImage:{
       width: '100%',
       height:'100%',
       justifyContent:'flex-end' //put the title at the bottom, the image just act like a view
   },
   title:{
       fontFamily:'open-sans-bold',
       fontSize: 22,
       color: 'white',
       backgroundColor:'rgba(0,0,0,0.5)',
       alignContent:'center',
       paddingVertical:5,
       paddingHorizontal:12,

   }
});

export default MealItem;