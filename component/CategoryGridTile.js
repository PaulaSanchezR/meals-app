import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'

const CategoryGrilTile = props =>{
    return(
    <TouchableOpacity 
        style={styles.gridItem}
        // onPress can just trigger the function that pass in it
        onPress={props.onSelect}>
        <View style={{backgroundColor: props.color}}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    gridItem:{
        flex:1, // to get much space that I can get
        margin:15,
        height:150,
    }
})
export default CategoryGrilTile