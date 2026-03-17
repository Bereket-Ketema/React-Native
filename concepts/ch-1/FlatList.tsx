import {View, Text, FlatList, StyleSheet} from 'react-native'

export default function List(){
  const data = [
    { id: "1", name: "Beki" },
    { id: "2", name: "John" },
    { id: "3", name: "Sara" },
  ];
  return(
    <View style={styles.container}>
      <FlatList
        data = {data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>Name: {item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    backgroundColor: "#eee",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  }
})