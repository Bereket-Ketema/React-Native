import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from "expo-router";

export default function task() {
  const {taskName, id} = useLocalSearchParams();
  return (
    <View>
      <Text>taskName: {taskName}</Text>
      <Text>id: {id}</Text>
    </View>
  )
}