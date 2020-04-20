import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet,TouchableNativeFeedback, Platform, } from 'react-native'

const CategoryGrilTile = props =>{
    // to remove the border color 
    let TouchableCmp = TouchableOpacity;
    // the 21 version is touchable native
    if(Platform.OS === 'android' && Platform.Version >=21 ){
        TouchableCmp = TouchableNativeFeedback
    }
    return(
    <View style={styles.gridItem}>
         <TouchableCmp
           style={{flex:1}}
            // onPress can just trigger the function that pass in it
            onPress={props.onSelect}>
            <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableCmp>
    </View>    
   
    )
}

const styles= StyleSheet.create({
    gridItem:{
        flex:1, // to get much space that I can get
        margin:15,
        height:150,
        borderRadius:10,
        overflow: 'hidden'

    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowRadius:10,
        elevation:3,
        shadowOffset: {width:0 , height:2},
        padding:15,
        alignItems: 'flex-end', // to move to the right
        justifyContent:'flex-end' // flex direcction of the container is top to bottom because is column
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize:22,
        textAlign:'right'
    }
})
export default CategoryGrilTile