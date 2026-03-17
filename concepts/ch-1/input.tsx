import { useState } from 'react'
import {Text, TextInput, View, StyleSheet, Pressable} from 'react-native'

export default function Input(){
  const [name, setName] = useState('');

  function handlePress(name: String){
    if(name.trim() ===  ''){
      alert("Please enter your name");
    return;
    }
    alert(`hello, ${name}`);
    setName(''); // After the submit it clears the input
  }

  return(
    <View style={styles.container}>
      <TextInput
      style = {styles.input}
      placeholder='Please Enter your name'
      value = {name}
      onChangeText = {setName}
      />

      <Pressable onPress={()=> handlePress(name)} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {   
    width: 200,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 8,
  },  
  button: {
    backgroundColor: '#a77777',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
})