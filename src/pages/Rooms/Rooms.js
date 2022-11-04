import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import Seperator from '../../components/Seperator';

import styles from './Rooms.style';
import FloatingButton from '../../components/FloatingButton';
import RoomIcon from '../../components/RoomIcon/RoomIcon';

const data = [
  {id: 0, text: 'Python'},
  {id: 1, text: 'Unity'},
  {id: 2, text: 'Kotlin'},
  {id: 3, text: 'React'},
  {id: 4, text: 'PHP'},
];

export default () => {
  const renderRoom = ({item}) => <RoomIcon text={item.text} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Rooms</Text>
      <Seperator />
      <FlatList
        style={styles.list}
        data={data}
        renderItem={item => renderRoom(item)}
        numColumns={2}
      />
      <FloatingButton />
    </SafeAreaView>
  );
};
