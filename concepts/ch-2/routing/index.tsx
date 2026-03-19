import { Pressable, Text, View } from "react-native";
import Greeting from "@/components/Greeting";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  function goToDetails() {
    router.push({
      pathname: "../details",
      params: {
        name: "Beki",
        age: "20",
      },
    });
  }
  return (
    <View>
      <Greeting name="Bereket" role='Mobile app Developer'/>
      <Text onPress={() => router.push('../add')} style={{color: 'blue', marginTop: 20}}>Go to Add Task</Text>
      <Pressable onPress={goToDetails}>
        <Text>Go to Details</Text>
      </Pressable>
    </View>
  );
}