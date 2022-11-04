import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './Login.style';

export default ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
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
      <Button
        text="Giriş Yap"
        onPress={() => navigation.navigate('RoomsPage')}
      />
      <Button
        text="Kayıt Ol"
        type="secondary"
        onPress={() => navigation.navigate('SignPage')}
      />
    </SafeAreaView>
  );
};
