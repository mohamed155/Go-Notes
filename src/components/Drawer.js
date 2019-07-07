import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Avatar, Button, List, Divider, withTheme} from "react-native-paper";
import images from "../common/images";
import {Navigation} from "react-native-navigation";

class Drawer extends PureComponent {

  constructor(props) {
    super(props);
    this.goToLoginScreen = this.goToLoginScreen.bind(this);
  }

  goToLoginScreen() {
    Navigation.mergeOptions('Drawer', {
      sideMenu: {
        left: {
          visible: false
        }
      }
    });
    Navigation.push('HomeScreen', {
      component: {
        name: 'navigation.Login'
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.accountContainer}>
            <View style={styles.avatarWrapper}>
              <Avatar.Image size={60} source={images.userIcon} />
            </View>
            <View style={styles.accountRight}>
              <Text style={styles.userName}>Guest</Text>
              <Button mode="text" onPress={this.goToLoginScreen}>Login</Button>
            </View>
          </View>
          <List.Item
            title="Notes"
            style={styles.listItem}
            onPress={() => alert('list item pressed')}
            left={props => <List.Icon {...props} icon="note" />}
          />
          <Divider/>
          <List.Item
            title="Trash"
            style={styles.listItem}
            onPress={() => alert('list item pressed')}
            left={props => <List.Icon {...props} icon="delete" />}
          />
          <Divider/>
          <List.Item
            title="Settings"
            style={styles.listItem}
            onPress={() => alert('list item pressed')}
            left={props => <List.Icon {...props} icon="settings" />}
          />
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
  scrollContent: {
    flex: 1,
    width: 500
  },
  accountContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf',
    marginBottom: 10
  },
  avatarWrapper: {
    marginRight: 10,
  },
  accountRight: {
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 0,
    color: '#000',
  },
  listItem: {
    height: 50,
    justifyContent: 'center'
  }
});

export default withTheme(Drawer);
