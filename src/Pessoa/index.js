import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Pessoa({item}) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>{item.nome}</Text>
      <Text style={styles.textoPessoa}>{item.idade}</Text>
      <Text style={styles.textoPessoa}>{item.email}</Text>
    </View>
  );
}

export default Pessoa;

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#123123',
    height: 200,
    margin: 10,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 20,
  },
});
