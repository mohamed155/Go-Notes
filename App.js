import React from 'react';

import {Navigation} from "react-native-navigation";
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from "./src/screens/HomeScreen";
import Drawer from "./src/components/Drawer";
import config from './src/common/config';
import LoginScreen from "./src/screens/LoginScreen";

Navigation.registerComponent(`navigation.Home`,
  () => (props) => (
    <PaperProvider theme={config.theme}>
      <HomeScreen {...props}/>
    </PaperProvider>
  ),
  () => HomeScreen);

Navigation.registerComponent(`navigation.Drawer`,
  () => (props) => (
    <PaperProvider theme={config.theme}>
      <Drawer {...props}/>
    </PaperProvider>
  ),
  () => Drawer);

Navigation.registerComponent(`navigation.Login`,
  () => (props) => (
    <PaperProvider theme={config.theme}>
      <LoginScreen {...props}/>
    </PaperProvider>
  ),
  () => LoginScreen);

export default () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: "sideMenu",
        left: {
          component: {
            id: "Drawer",
            name: "navigation.Drawer"
          }
        },
        center: {
          stack: {
            id: "MainStack",
            children: [{
              component: {
                id: "HomeScreen",
                name: "navigation.Home"
              }
            }]
          }
        }
      }
    }
  });
};
