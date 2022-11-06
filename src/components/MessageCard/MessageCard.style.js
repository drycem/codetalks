import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    color: '#c3c3c3',
    fontSize: 18,
  },
  date: {
    color: '#c3c3c3',
    fontSize: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
