import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const products = [
  { id: '1', name: 'Product 1', price: '$10' },
  { id: '2', name: 'Product 2', price: '$20' },
  { id: '3', name: 'Product 3', price: '$30' },
];

export default function ProductListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button title="Add to Cart" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  productCard: { padding: 15, borderWidth: 1, marginBottom: 10, borderRadius: 5 },
  productName: { fontSize: 18, fontWeight: 'bold' },
});
