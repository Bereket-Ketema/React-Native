import { Text, View } from "react-native";
type Props = {
  name: string;
  role: string;
};

export default function Greeting({name, role}: Props){
  return(
    <View>
      <Text>Name: {name}</Text>
      <Text>Role: {role}</Text>
    </View>
  );
}