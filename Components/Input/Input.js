import React from 'react';
import { StyleSheet, Keyboard, Text, View, TextInput, TouchableHighlight, Vibration } from 'react-native';

export default class Input extends React.Component {

  fetchData () {
    console.log(this.props.value);
    fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.props.updateJokes(data.value);
      Keyboard.dismiss;
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.value}
          style={styles.input}
          onChangeText={(text) => this.props.onChange(text)} />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.fetchData()}>
          <Text
            style={styles.text}>
            Search
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    height: 30,
    borderColor: '#efefef',
    borderWidth: 2
  },
  button: {
    borderWidth: 1,
    marginTop: 10,
    width: 200,
    height: 30,
    borderRadius: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})
