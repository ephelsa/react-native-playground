import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BankScreen, CityScreen, HomeScreen, SquareScreen} from '../screens';

type Props = {};

export type ModalsEverywhereParamList = {
  Home: undefined;
  Bank: undefined;
  City: undefined;
  Square: undefined;
};

const Stack = createNativeStackNavigator<ModalsEverywhereParamList>();

export const ModalsEverywhereNavigation = ({
  children,
}: React.PropsWithChildren<Props>): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bank"
          component={BankScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="City"
          component={CityScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Square"
          component={SquareScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
};
