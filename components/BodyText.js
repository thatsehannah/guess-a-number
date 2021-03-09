import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from '../constants/fontFamilies';

const BodyText = (props) => <Text style={styles.body}>{props.children}</Text>;

const styles = StyleSheet.create({
  body: {
    fontFamily: fonts.montserratReg,
  },
});

export default BodyText;
