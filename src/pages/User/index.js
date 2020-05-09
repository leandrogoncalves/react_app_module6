/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function User({ route, navigation }) {
  console.tron.log(route.params);

  return (
    <View>
      <Text>User</Text>
    </View>
  );
}
