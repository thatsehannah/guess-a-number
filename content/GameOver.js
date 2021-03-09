import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import colors from '../constants/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import CustomButton from '../components/CustomButton';
import font from '../constants/fontFamilies';

const GameOver = (props) => {
  const { rounds, numberGuessed, newGame } = props;
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <Image
        style={styles.image}
        fadeDuration={1000}
        // source={require('../assets/images/success.png')}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg',
        }}
        resizeMode='cover'
      />
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultsText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>{' '}
          round(s) to guess the number{' '}
          <Text style={styles.highlight}>{numberGuessed}</Text>.
        </BodyText>
      </View>

      <CustomButton onPress={newGame}>START OVER</CustomButton>
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
    width: 250,
    height: 250,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: '#000',
    marginVertical: 30,
  },
  highlight: {
    color: colors.primary,
    fontFamily: font.montserratBold,
  },
  resultsText: {
    textAlign: 'center',
    fontSize: 20,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
});

export default GameOver;
