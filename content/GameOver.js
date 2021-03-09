import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import colors from '../constants/colors';
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOver = (props) => {
  const {rounds, numberGuessed, newGame} = props
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <Image source={require('../assets/images/success.png')}/>
      <BodyText>Number of rounds: {rounds}</BodyText>
      <BodyText>Number was: {numberGuessed}</BodyText>
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
