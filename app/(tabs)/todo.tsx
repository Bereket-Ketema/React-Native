import { Text, View, StyleSheet, TextInput, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState<{id: string; task: string}[]>([]);
  function handleAdd(){
    if (task.trim() === ""){
      alert("Empty task!");
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      task: task
    }

    setData([...data, newItem]);
    setTask("");
    

  }
    return (
      <View style={styles.container}>
        <TextInput
          style = {styles.input}
          value = {task}
          placeholder = 'Enter a task'  
          onChangeText = {setTask}      
        />
        <Pressable onPress={(handleAdd)} style={styles.button}>
          <Text style= {styles.buttonText} >Add</Text>
        </Pressable>

        <FlatList
        data = {data}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
          <View style={styles.item}>
            <Text>{item.task}</Text>
            <Pressable onPress={() => {
              setData(data.filter(i => i.id !== item.id))
            } }>
              <AntDesign name="delete" size={24} color="red" />
            </Pressable>
          </View>
        )}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    padding: 12,
  },

  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    height: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  item: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

})