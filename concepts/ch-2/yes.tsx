import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import {useRouter} from "expo-router"

export default function Yes() {
  const router = useRouter();
  function send(){
    router.push({
      pathname: "../task",
      params: {
        taskName: "home work",
        id: "21"
      }
    })
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={send}><Text>Go to task page</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})