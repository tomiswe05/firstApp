import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  NameContext  from './NameContext'; 


const Last = () => {
  

  const { name} = React.useContext(NameContext); // Access the name from context
  return (
    <View>
      <Text>Last</Text>
      <Text>{name}</Text>
    </View>
  )
}

export default Last

const styles = StyleSheet.create({})