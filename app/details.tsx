import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const { name, age } = useLocalSearchParams();//read data that passed from another screen

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}