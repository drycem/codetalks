import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './Messages.style';
import MessageCard from '../../components/MessageCard';
import FloatingButton from '../../components/FloatingButton';
import Modal from '../../components/Modal';
import parseMessages from '../../utils/parseContentFromRooms';

export default ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [messagesData, setMessagessData] = useState(null);

  const user = auth().currentUser;

  const renderMessage = ({item}) => <MessageCard message={item} />;

  useEffect(() => {
    if (route.params.roomId) {
      database()
        .ref('/rooms/' + route.params.roomId + '/messages')
        .on('value', snapshot => {
          if (snapshot.val()) {
            const contentData = snapshot.val();
            const parsedData = parseMessages(contentData || {});
            setMessagessData(parsedData);
          }
        });
    }
    // .then(
    // setMessagessData(parseMessages(snapshot.val()));
    // })
    // .catch(err => console.log(err));
  }, []);

  function createMessage() {
    database()
      .ref('/rooms/' + route.params.roomId + '/messages')
      .push({
        text: message,
        user: user.email,
        createdAt: new Date().toISOString(),
      })
      .catch(err => console.log(err));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{route.params.roomName}</Text>
      <FlatList
        style={styles.list}
        data={messagesData}
        keyExtractor={item => item.id}
        renderItem={item => renderMessage(item)}
      />
      <Modal
        value={message}
        onChangeText={setMessage}
        isVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onSend={createMessage}
      />
      <FloatingButton onPress={() => setModalVisible(!modalVisible)} />
    </SafeAreaView>
  );
};
