import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

export const HappyBottomSheetContent = ({}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>😁</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    fontSize: 60,
  },
});
