import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>LOGADO COM SUCESSO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  successText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50', // Cor verde para indicar sucesso
    textAlign: 'center',
  },
});

export default HomeScreen;
