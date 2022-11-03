import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.style';

export default ({text, onPress, type = 'primary'}) => {
  return (
    <TouchableOpacity style={styles[type].container} onPress={onPress}>
      <Text style={styles[type].text}>{text}</Text>
    </TouchableOpacity>
  );
};
