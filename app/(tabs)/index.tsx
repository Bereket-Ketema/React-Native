import { Text, View } from "react-native";
import Greeting from "@/components/Greeting";

export default function Index() {
  return (
    <View>
      <Text>Name</Text>
      <Greeting name="Bereket" role='Mobile app Developer'/>
    </View>
  );
}