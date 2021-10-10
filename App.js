import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Pessoa from './src/Pessoa';
import Header from './src/Header';

function App() {
  const [feed, setFeed] = useState([
    {_id: 1, nome: 'diego', idade: 32, email: 'diego@gmail.com'},
    {_id: 2, nome: 'lucas', idade: 21, email: 'lucas@gmail.com'},
    {_id: 3, nome: 'matheus', idade: 1, email: 'matheus@gmail.com'},
    {_id: 4, nome: 'marina', idade: 23, email: 'marina@gmail.com'},
    {_id: 5, nome: 'Rafaela', idade: 29, email: 'rafa@gmail.com'},
    {_id: 6, nome: 'Janice', idade: 29, email: 'rafa@gmail.com'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={({item}) => <Pessoa item={item} />}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
