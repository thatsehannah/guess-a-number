import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from '../constants/fontFamilies';

const TitleText = (props) => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.montserratBold,
    fontSize: 20,
  },
});

export default TitleText;
