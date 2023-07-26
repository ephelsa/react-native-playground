import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type TabProps = {
  onPress: () => void;
  text: string;
  isActive?: boolean;
};

export const Tab = ({
  onPress,
  text,
  isActive = false,
}: TabProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={{...styles.text, borderBottomWidth: isActive ? 2 : 0}}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    paddingBottom: 4,
    borderColor: 'rgb(221, 235, 224)',
  },
});
