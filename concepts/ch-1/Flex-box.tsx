import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text>Box1</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
      <Text>Box2</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
      <Text>Box3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 8,
  },
  box1: {
    backgroundColor: '#e46060'
  },
  box2: {
    backgroundColor: '#609ee4'
  },
  box3: {
    backgroundColor: '#c1e460'
  }
});