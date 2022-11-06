import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import styles from './Modal.style';
import Button from '../Button';
import Input from '../Input';
import colors from '../../colors';

export default ({value, onChangeText, isVisible, closeModal, onSend}) => {
  return (
    <View>
      <Modal
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        isVisible={isVisible}>
        <View style={styles.container}>
          <View style={styles.input_container}>
            <Input
              value={value}
              onChangeText={onChangeText}
              placeholder="Oluşturulacak oda adını yazın..."
            />
            <Button text="Ekle" onPress={onSend} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
