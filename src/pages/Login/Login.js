import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './Login.style';
import parseMessage from '../../utils/parseMessage';

export default ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function login() {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(snapshot => {
          console.log(snapshot);
        })
        .catch(err =>
          showMessage({message: parseMessage(err.code), type: 'danger'}),
        );
    } else {
      showMessage({
        message: 'Email yada parola boş olamaz',
        type: 'danger',
      });
    }
  }

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
      <Button text="Giriş Yap" onPress={login} />
      <Button
        text="Kayıt Ol"
        type="secondary"
        onPress={() => navigation.navigate('SignPage')}
      />
    </SafeAreaView>
  );
};
