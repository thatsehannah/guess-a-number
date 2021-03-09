import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colors from '../constants/colors';

import Card from './Card';
import Input from './Input';

const StartGame = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A Number</Text>
        <Input
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='number-pad'
          maxLength={2}
          style={styles.input}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='RESET' color={colors.secondary} />
          </View>
          <View style={styles.button}>
            <Button title='CONFIRM' color={colors.primary} />
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
  input: {
    width: '20%',
    textAlign: 'center',
  },
});

export default StartGame;
