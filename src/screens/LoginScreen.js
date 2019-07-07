import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native';
import images from "../common/images";
import colors from "../common/colors";
import {Navigation} from "react-native-navigation";
import {withTheme, Button} from "react-native-paper";

class LoginScreen extends Component {

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
              <Image source={images.mailIcon} style={styles.inputIcon} />
              <TextInput style={styles.textInput} placeholder="Email"/>
            </View>
            <Text style={styles.assistiveText}>Assistive text</Text>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputBox}>
              <Image source={images.lockIcon} style={styles.inputIcon} />
              <TextInput style={styles.textInput} placeholder="Password" secureTextEntry/>
            </View>
            <Text style={styles.assistiveText}>Assistive text</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Button style={styles.blockBtn} mode="contained" onPress={() => alert('login pressed')}>Login</Button>
          </View>
          <View style={styles.signupWrapper}>
            <Text style={styles.signupText}>Do not have account? </Text>
            <Button style={styles.signupBtn} mode="text" onPress={() => alert('signup pressed')} >Sign up Now</Button>
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
    padding: 15
  },
  logoWrapper: {
    marginTop: 20,
    marginBottom: 20
  },
  logoImage: {
    width: 123,
    height: 130,
  },
  inputWrapper: {
    width: '100%',
    marginVertical: 20
  },
  inputBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 0
  },
  textInput: {
    flex: 1,
    fontSize: 18
  },
  inputIcon: {
    tintColor: colors.primary,
    width: 24,
    height: 24,
    margin: 15
  },
  assistiveText: {
    marginLeft: 20,
    color: colors.primary
  },
  buttonWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10
  },
  blockBtn: {
    height: 50,
    justifyContent: 'center',
    width: 300
  },
  signupWrapper: {
    flexDirection: 'row',
    marginTop: 30
  },
  signupText: {
    marginVertical: 10
  }
});

export default withTheme(LoginScreen);
