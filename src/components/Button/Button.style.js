import {StyleSheet} from 'react-native';
import colors from '../../colors';

const base = {
  container: {
    borderRadius: 20,
    margin: 20,
    padding: 10,
  },
  text: {
    fontSize: 34,
    textAlign: 'center',
  },
};

export default StyleSheet.create({
  primary: {
    ...base,
    container: {
      ...base.container,
      backgroundColor: colors.light,
    },
    text: {
      ...base.text,
      color: 'white',
    },
  },
  secondary: {
    ...base,
    container: {
      ...base.container,
      backgroundColor: 'white',
    },
    text: {
      ...base.text,
      color: colors.light,
    },
  },
});
