import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/Home';
import Discover from './screens/Discover';
import Chat from './screens/Chat';
import ChatMessages from './screens/ChatMessages';
import Menu from './screens/Menu';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import ChatReducer from './store/reducers/ChatReducer';



DefaultTheme.colors.background = '#FFFFFF'; // set background color globally


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={Chat} options={{
          title: 'CHAT', 
        }}/>
        <Stack.Screen name="ChatMessages" component={ChatMessages} />
      </Stack.Navigator>
  );
}

const rootReducer = combineReducers({
  chat: ChatReducer
});
const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(rootReducer);

export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-sharp'
                : 'home-sharp';
            } else if (route.name === 'Discover') {
              iconName = focused ? 'md-search' : 'md-search';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'md-menu' : 'md-menu';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5050A5',
          inactiveTintColor: '#B7B7B7',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Chat" component={StackNavigator} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  
});
