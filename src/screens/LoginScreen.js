import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native';
import images from "../common/images";
import colors from "../common/colors";
import {Navigation} from "react-native-navigation";
import {withTheme} from "react-native-paper";

class LoginScreen extends Component<Props> {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Login',
          color: '#fff'
        },
        leftButtons: [
          {
            id: 'backBtn',
            icon: images.backIcon,
            color: '#fff'
          }
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
          <View style={styles.logoWrapper}>
            <Image source={images.logoImage} style={styles.logoImage}/>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputBox}>
              <TextInput style={styles.textInput}/>
            </View>
          </View>
          <View style={styles.inputWrapper}>

          </View>
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
    padding: 10
  },
  inputWrapper: {
    width: '100%'
  },
  inputBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10
  },
  textInput: {
    flex: 1
  }
});

export default withTheme(LoginScreen);
