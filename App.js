import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGame from './content/StartGame';
import Game from './content/Game';
import GameOver from './content/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameRounds, setGameRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGameRounds(0);
  };

  const gameOverHandler = (gameRounds) => {
    setGameRounds(gameRounds);
  };

  let content = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && gameRounds <= 0) {
    content = <Game userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (gameRounds > 0) {
    content = <GameOver />;
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess A Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
