import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
