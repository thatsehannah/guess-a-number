import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from './Card';

const StartGame = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A Number</Text>
        <TextInput />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='RESET' />
          </View>
          <View style={styles.button}>
            <Button title='CONFIRM' />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: '43%',
  },
});

export default StartGame;
