import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // or 'react-native-linear-gradient'
import { Link } from 'expo-router';
import { useFonts, FreckleFace_400Regular } from '@expo-google-fonts/freckle-face';

const GradientBackground = () => {
  const [fontsLoaded] = useFonts({
    FreckleFace_400Regular,
  });
  if (!fontsLoaded) {
    return null; // or a loading indicator
  }
  return (
    <LinearGradient
      colors={['#FFD1DC', '#FFD1DC', '#FFE5B4']}
      locations={[0, 0.66, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }} // Top to Bottom
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={require('../assets/imghome.png')}
      />
      <Text style={styles.text}>Welcome!</Text>

      <TouchableOpacity style={[styles.btn, { marginTop: 100 }]} asChild>
         <Link href="/AskName">
            <Text style={styles.btnText}>Click Me</Text>
        </Link>
      </TouchableOpacity>


       

    </LinearGradient>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    fontSize: 32,  
    color: '#000',
    fontFamily: 'FreckleFace_400Regular',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 50,
    
  },
  btn: {
    backgroundColor: '#8667BE',
    borderRadius: 5,
    width: 160,
    height: 50,
    
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 50,
    fontWeight: 'bold',

  }
});
