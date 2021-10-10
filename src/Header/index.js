import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Seja Bem Vindo</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#123123',
  },
});
