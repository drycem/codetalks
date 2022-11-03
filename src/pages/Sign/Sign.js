import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './Sign.style';

export default ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>codetalks</Text>
      <Input value={email} placeholder="email" onChangeText={setEmail} />
      <Input
        value={password}
        placeholder="password"
        onChangeText={setPassword}
        secure
      />
      <Input
        value={password2}
        placeholder="password again"
        onChangeText={setPassword2}
        secure
      />
      <Button text="Kayıt Ol" />
      <Button
        text="Geri"
        type="secondary"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};
