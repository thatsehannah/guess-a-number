import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import colors from '../constants/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOver = (props) => {
  const { rounds, numberGuessed, newGame } = props;
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <Image
        style={styles.image}
        source={require('../assets/images/success.png')}
        resizeMode='cover'
      />
      <BodyText>Number of rounds: {rounds}</BodyText>
      <BodyText>Number was: {numberGuessed}</BodyText>
      <Button
        title='START OVER'
        color={colors.secondary}
        onPress={newGame}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: '#000',
    marginVertical: 30
  },
});

export default GameOver;
