import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Avatar, Button} from "react-native-paper";
import images from "../common/images";

class Drawer extends PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.accountContainer}>
            <View style={styles.avatarWrapper}>
              <Avatar.Image size={50} source={images.userIcon} />
            </View>
            <View style={styles.acountRight}>
              <Text>Guest</Text>
              <Button mode="text" onPress={() => alert('login pressed')}>Login</Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
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
