import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.style';

export default ({value, placeholder, onChangeText, secure = false}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secure}
        autoFocus={true}
      />
    </View>
  );
};
