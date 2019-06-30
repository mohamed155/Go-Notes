import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Drawer extends PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Drawer</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Drawer;
