import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BodyText from './BodyText';

const GuessesContainer = (props) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={styles.list}
        data={props.guesses}
        keyExtractor={(item) => item}
        renderItem={(itemData) => {
          return (
            <View style={styles.listItem}>
              <BodyText>#{props.guesses.length - itemData.index}</BodyText>
              <BodyText>{itemData.item}</BodyText>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '80%',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default GuessesContainer;
