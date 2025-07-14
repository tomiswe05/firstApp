import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import NameContext  from './NameContext'; // Import the context
import { useRouter } from 'expo-router';

const AskName = () => {
    //const [name, setName] = React.useState('');
    const router = useRouter();
    const {setName}=React.useContext(NameContext); 
    const [empty, setEmpty] = React.useState('');
    const handleNameChange = () => {
        setName(empty);
        setEmpty('');
        router.push('/Last'); // navigate after setting context
    }

  return (
   <>
    <View style= {styles.container}>
     <View style={{ width: '100%', alignItems: 'center', marginTop: 50 }}> 
     <Text style={styles.label}>Enter Your Name</Text>
      <TextInput
      style={styles.input}
      value={empty} 
      placeholder='Name'
      onChangeText={text => setEmpty(text)}
      />

     <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.askBtn} onPress={handleNameChange}>
            <Text style={styles.askBtnText}>Submit</Text> 
        </TouchableOpacity>
     </View>

    </View>
    
    <View style={styles.dogContain}>
        <Image
         source={require('../assets/Dog.png')}
         style={styles.dog}
        />
    </View>
    </View>
   </>
    
  )
}

export default AskName

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#e8e8e8'
    },
    label: {
        width: '80%',
        textAlign: 'left',
        fontSize: 17,
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 15,
        
    },
    btnContainer :{
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    askBtn:{
    backgroundColor: '#8667BE',
    borderRadius: 5,
    width: 160,
    height: 50,
    marginTop: 20,
    },
    askBtnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 50,
        fontWeight: 'bold',
    },
    dogContain:{
        width: '90%',
        alignItems: 'flex-start'

    },
    dog : {
        width: 150,
        height: 300
    }
})