import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      data: []
    };
  }




  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.term} onChangeText={(text) => this.setState({term: text})} placeholder="Put name here..."/>
        <Text>{this.state.term}</Text>

        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
