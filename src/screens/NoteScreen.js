import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import images from "../common/images";
import colors from "../common/colors";
import {Navigation} from "react-native-navigation";
import {withTheme, Button} from "react-native-paper";
import IconM from 'react-native-vector-icons/MaterialIcons';

class NoteScreen extends Component {

  static options(passProps) {
    return {
      topBar: {
        leftButtons: [
          {
            id: 'backBtn',
            icon: images.backIcon,
            color: '#fff'
          }
        ],
        rightButtons: [
          {
            id: 'changeColorBtn',
            text: 'Change color'
          },
          {
            id: 'lockBtn',
            icon: images.unlockIcon,
            color: '#fff',
            text: 'Lock'
          },
          {
            id: 'redoBtn',
            icon: images.redoIcon,
            color: '#fff',
            text: 'Redo'
          },
          {
            id: 'undoBtn',
            icon: images.undoIcon,
            color: '#fff',
            text: 'Undo'
          },
          {
            id: 'searchBtn',
            icon: images.searchIcon,
            color: '#fff',
            text: 'Search'
          },
        ],
        background: {
          color: colors.primary
        }
      }
    }
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'backBtn') {
      Navigation.pop(this.props.componentId)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.titleWrapper}><TextInput placeholder="Title" style={styles.titleInput}/></View>
          <View style={styles.contentWrapper}><TextInput placeholder="content" style={styles.contentInput}/></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 15
  },
  titleWrapper: {
    width: '100%',
  },
  contentWrapper: {
    width: '100%'
  },
  titleInput: {
    fontSize: 18
  },
  contentInput: {}
});

export default withTheme(NoteScreen);
