import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{this.props.joke}</Text>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>No More Jokes</Text>
      </View>
    )
  }
}

export default class Tinder extends React.Component {

  handleAccept() {
    console.log('I like this');
  }

  handleReject() {
    console.log('I don\'t like this');
  }

  render() {
    return (
      <SwipeCards
        cards={this.props.jokes}
        renderCard={(jokeObject) => <Card joke={jokeObject.joke} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleAccept}
        handleNope={this.handleReject} />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 10,
    borderColor: '#efefef',
    borderWidth: 2,
    backgroundColor: '#04b1ff'
  },
  text: {
    color: 'white'
  }
})
