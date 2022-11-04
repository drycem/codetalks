import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors';

const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderColor: '#c3c3c3',
    borderWidth: 1,
    borderRadius: 20,
    margin: 20,
    padding: 20,
    width: device.width / 2 - 40,
    height: device.width / 2 - 40,
    justifyContent: 'center',
  },
  text: {
    fontSize: 44,
    textAlign: 'center',
    color: colors.light,
  },
});
