import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Tab} from './Tab';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ModalsEverywhereParamList} from '../../navigation';

const routes: {name: string; route: keyof ModalsEverywhereParamList}[] = [
  {
    name: '🏡',
    route: 'Home',
  },
  {
    name: '🏦',
    route: 'Bank',
  },
  {
    name: '🌃',
    route: 'City',
  },
  {
    name: '🎠',
    route: 'Square',
  },
];

type Props = {};

export const BottomTabBar = ({}: Props): JSX.Element => {
  const [currentRoute, setCurrentRoute] =
    useState<keyof ModalsEverywhereParamList>('Home');
  const navigation = useNavigation<NavigationProp<ModalsEverywhereParamList>>();

  useEffect(() => {
    navigation.addListener('state', payload => {
      const rts = payload.data.state?.routes;
      const size = rts?.length ?? 0;

      if (rts === undefined) {
        return;
      }
      setCurrentRoute(rts[size - 1].name);
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {routes.map(r => (
        <Tab
          key={r.route}
          text={r.name}
          isActive={currentRoute === r.route}
          onPress={() => {
            navigation.navigate(r.route);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 14,
    paddingHorizontal: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
