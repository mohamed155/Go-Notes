import {DefaultTheme} from "react-native-paper";
import colors from './colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
  }
};

export default {theme};
