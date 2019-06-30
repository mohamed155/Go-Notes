import {Navigation} from "react-native-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import Drawer from "./src/components/Drawer";

Navigation.registerComponent(`navigation.AppScreen`, () => HomeScreen);
Navigation.registerComponent(`navigation.Drawer`, () => Drawer);

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
