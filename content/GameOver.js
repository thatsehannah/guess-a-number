import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import colors from '../constants/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import CustomButton from '../components/CustomButton';
import font from '../constants/fontFamilies';

const GameOver = (props) => {
  const { rounds, numberGuessed, newGame } = props;
  return (
      <ScrollView>
        <View style={styles.screen}>
          <TitleText>The Game is Over!</TitleText>
          <Image
            style={styles.image}
            fadeDuration={1000}
            source={require('../assets/images/success.png')}
            // source={{
            //   uri:
            //     'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg',
            // }}
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
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: Dimensions.get('window').width * 0.58,
    height: Dimensions.get('window').width * 0.58,
    borderRadius: (Dimensions.get('window').width * 0.58) / 2,
    borderWidth: 3,
    borderColor: '#000',
    marginVertical: Dimensions.get('window').height / 30,
  },
  highlight: {
    color: colors.primary,
    fontFamily: font.montserratBold,
  },
  resultsText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 600 ? 16 : 20,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60,
  },
});

export default GameOver;
