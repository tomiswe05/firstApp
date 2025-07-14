import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import  NameContext  from './NameContext'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, FreckleFace_400Regular } from '@expo-google-fonts/freckle-face';


const Last = () => {
  const [fontsLoaded] = useFonts({
      FreckleFace_400Regular,
    });

  const { name} = React.useContext(NameContext); // Access the name from context
  return (
    <SafeAreaView>
      <Image 
      source={require('../assets/last.png')}
      style={styles.lastImage}
      
      />
      <Text style={styles.lastText}>Hello {name}, thank you {'\n'} for interacting with my first App.</Text>

    </SafeAreaView>
  )
}

export default Last

const styles = StyleSheet.create({
  lastContainer: {
    justifyContent: 'space-evenly',
  },
  lastText :{
    textAlign: 'center',
    lineHeight: 25,
    fontFamily: 'FreckleFace_400Regular',
    fontSize: 25,
    marginTop: 40,

  },
  lastImage:{
    marginTop: 100
  }
})