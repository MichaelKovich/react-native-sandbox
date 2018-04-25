import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Michael's Really Cool Android Application</Text>
        <Text>Changes you make will automatically reload.</Text>
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
  },
  welcomeText: {
    fontSize: 20,
    padding: 15,
    backgroundColor: 'slategray',
    marginBottom: '5%',
    color: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
});
