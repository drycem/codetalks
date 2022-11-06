import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessageCard.style';

import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

export default ({message}) => {
  const formatedDate = formatDistance(parseISO(message.createdAt), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.user}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>
      <Text style={styles.title}>{message.text}</Text>
    </View>
  );
};
