import React from 'react';
import {Navigation} from "react-native-navigation";
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from "./src/screens/HomeScreen";
import Drawer from "./src/components/Drawer";
import config from './src/common/config';

Navigation.registerComponent(`navigation.AppScreen`,
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
            id: "AppRoot",
            children: [{
              component: {
                id: "App",
                name: "navigation.AppScreen"
              }
            }]
          }
        }
      }
    }
  });
};
