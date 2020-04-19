import React, { useState } from 'react';
import { StyleSheet, Text, View , Navigation} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo' // this component prolong this splash screen the app start until our fons are loaded it load 
import { enableScreens } from 'react-native-screens'

// only see something on the screen when our assess are load it
import MealsNavigator from './navigation/MealsNavigator'

enableScreens(); // increase the performance because unlock the screns

const fetchFonts=() =>{
  // loadAsync return a promess
  return  Font.loadAsync({        
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}


export default function App() {

  const [fontLoaded, setFontLoaded]= useState(false); // it is false because the font hasn't load

  // we check if the font hasnt load I will render my AppLoading component and 
  // we pass the fetchFonts to startAsync 
  if (!fontLoaded){
    return <AppLoading 
            startAsync={fetchFonts} 
            onFinish={() => setFontLoaded(true)}
            />
  }
  return (
        <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
