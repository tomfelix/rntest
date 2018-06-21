import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      data: []
    };
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/people`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson.results
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.term} onSubmit={(text) => this.setState({term: text})} placeholder="Put name here..."/>
        <Text>{this.state.term}</Text>
        <Text>Star Wars heroes</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.name}: {item.height}cm</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
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
    paddingTop: 50
  },
});
