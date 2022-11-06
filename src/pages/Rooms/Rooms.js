import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './Rooms.style';
import FloatingButton from '../../components/FloatingButton';
import RoomIcon from '../../components/RoomIcon';
import Modal from '../../components/Modal';
import parseRooms from '../../utils/parseContentFromRooms';

export default ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [roomName, setRoomName] = useState(null);
  const [roomsData, setRoomsData] = useState(null);
  const [count, setCount] = useState(0);

  const user = auth().currentUser;

  const renderRoom = ({item}) => (
    <RoomIcon
      text={item.name}
      onPress={() =>
        navigation.navigate('Messages', {roomId: item.id, roomName: item.name})
      }
    />
  );

  useEffect(() => {
    database()
      .ref('/rooms')
      .once('value')
      .then(snapshot => {
        setRoomsData(parseRooms(snapshot.val()));
      })
      .catch(err => console.log(err));
  }, [count]);

  function createRoom() {
    if (roomName && roomName !== '') {
      database()
        .ref('/rooms/')
        .push({
          name: roomName,
          createdBy: user.email,
          createdAt: new Date().toISOString(),
        })
        .then(() => {
          setRoomName('');
          setCount(count + 1);
          setModalVisible(false);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={roomsData}
        keyExtractor={item => item.id}
        renderItem={item => renderRoom(item)}
        numColumns={2}
      />
      <Modal
        value={roomName}
        onChangeText={setRoomName}
        isVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onSend={createRoom}
      />
      <FloatingButton onPress={() => setModalVisible(!modalVisible)} />
    </SafeAreaView>
  );
};
