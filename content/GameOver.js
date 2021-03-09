import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colors from '../constants/colors';

const GameOver = (props) => {
  const {rounds, numberGuessed, newGame} = props
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Number was: {numberGuessed}</Text>
      <Button title='START OVER' color={colors.secondary} onPress={newGame}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOver;
