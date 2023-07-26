import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheetContext} from '../components';

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button = ({onClick, text}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const HomeScreen = (): JSX.Element => {
  const {show, hide} = useContext(BottomSheetContext);

  return (
    <View style={styles.container}>
      <Button
        onClick={() => {
          show('Happy');
        }}
        text="Show Happy"
      />
      <Button
        onClick={() => {
          hide('Happy');
        }}
        text="Hide Happy"
      />
      <Button
        onClick={() => {
          show('Sad');
        }}
        text="Show Sad"
      />
      <Button
        onClick={() => {
          hide('Sad');
        }}
        text="Hide Sad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(148, 160, 166)',
  },
  button: {
    padding: 8,
    backgroundColor: 'rgb(160, 160, 160)',
    borderRadius: 8,
    marginTop: 12,
  },
});
