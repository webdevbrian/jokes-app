import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

//Import components
import Input from './Components/Input/Input';
import Tinder from './Components/Tinder/Tinder';

export default class App extends React.Component {

  state = {
    value: '',
    jokes: []
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Messing around with some "jokes"</Text>
        <Input
          updateJokes={(jokes) => this.setState({ jokes: jokes })}
          value={this.state.value}
          onChange={(value) => this.setState({ value: value })}
        />
        <Tinder
          jokes={this.state.jokes}
          style={styles.tinder}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 80
  }
});
