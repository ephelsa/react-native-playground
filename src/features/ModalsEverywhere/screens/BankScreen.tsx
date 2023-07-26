import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BankScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Hello from Bank</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(148, 160, 166)',
  },
});
