import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './Sign.style';
import parseMessage from '../../utils/parseMessage';

export default ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);

  function signUp() {
    if (password === password2) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(snapshot => {
          console.log(snapshot);
          navigation.navigate('LoginPage');
        })
        .catch(err => {
          showMessage({
            message: parseMessage(err.code),
            type: 'danger',
          });
        });
    } else {
      showMessage({
        message: 'passwords are different.',
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
      <Input
        value={password2}
        placeholder="password again"
        onChangeText={setPassword2}
        secure
      />
      <Button text="Kayıt Ol" onPress={signUp} />
      <Button
        text="Geri"
        type="secondary"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};
