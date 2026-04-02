import { View, Text, StyleSheet, Pressable} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

export default function Details() {
  const { data } = useContext(TaskContext);
  const { id } = useLocalSearchParams();//read data that passed from another screen
  const router = useRouter();
  const taskItem = data.find((item: { id: string | string[]; }) => item.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Task: {taskItem.task}</Text>
        <Text style={styles.status}>
          Status: {taskItem.completed ? "Completed" : "Not Completed"}
        </Text>
      </View>
      <Pressable onPress={() => router.back()}>
        <Text>
          <AntDesign name="left" size={17} /> Back
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    color: "gray",
  },
  card: {
    backgroundColor: "#d1c9c9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    textAlign: "center",
  }
});