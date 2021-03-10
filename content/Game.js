import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import CustomButton from '../components/CustomButton';
import GuessesContainer from '../components/GuessesContainer';
import * as ScreenOrientation from 'expo-screen-orientation';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

const Game = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [detectedDeviceHeight, setDetectedDeviceHeight] = useState(
    Dimensions.get('window').height
  );

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    const updateLayout = () => {
      setDetectedDeviceHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const newGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) || //my number is 55, computer guesses 50
      (direction === 'greater' && currentGuess > userChoice) //my number is 55, computer guesses 60
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentMax.current = currentGuess;
    } else {
      currentMin.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses((currentGuesses) => [
      nextNumber.toString(),
      ...currentGuesses,
    ]);
  };

  if (detectedDeviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <TitleText>Opponent's Guess</TitleText>
        <View style={styles.controls}>
          <CustomButton onPress={() => newGuessHandler('lower')}>
            <Ionicons name='md-remove' size={24} color='#fff' />
          </CustomButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <CustomButton onPress={() => newGuessHandler('greater')}>
            <Ionicons name='md-add' size={24} color='#fff' />
          </CustomButton>
        </View>

        <GuessesContainer guesses={pastGuesses} />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonsContainer}>
        <CustomButton onPress={() => newGuessHandler('lower')}>
          <Ionicons name='md-remove' size={24} color='#fff' />
        </CustomButton>
        <CustomButton onPress={() => newGuessHandler('greater')}>
          <Ionicons name='md-add' size={24} color='#fff' />
        </CustomButton>
      </Card>
      <GuessesContainer guesses={pastGuesses} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
    width: '95%',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
});

export default Game;
