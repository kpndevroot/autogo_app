/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {
  Login,
  HomeScreen,
  ButtonScreen,
  CreateRide,
  FindRide,
  Profile,
} from './screens';
const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};

function MyStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTintColor: 'black',
          // headerStyle: {backgroundColor: '#FFB647'},
        }}
      /> */}
      <Stack.Screen
        name="Options"
        component={ButtonScreen}
        options={{
          headerShown: false,
          // headerTintColor: 'black',
          // headerStyle: {backgroundColor: '#FFB647'},
        }}
      />
      <Stack.Screen
        name="Create"
        component={CreateRide}
        options={{
          headerShown: false,
          // headerTintColor: 'black',
          // headerStyle: {backgroundColor: '#FFB647'},
        }}
      />
      <Stack.Screen
        name="Find"
        component={FindRide}
        options={{
          headerShown: false,
          // headerTintColor: 'black',
          // headerStyle: {backgroundColor: '#FFB647'},
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerStyleInterpolator: forFade}}
      />
    </Stack.Navigator>
  );
}
function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
