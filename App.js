import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/screen/HomeScreen';
import SenatorsScreen from './components/screen/SenatorsScreen';
import RepScreen from './components/screen/RepScreen';
import PresidentsScreen from './components/screen/PresidentScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
              
            } else if (route.name === 'Presidents') {
              iconName = focused ? 'user' : 'user';
            } else if (route.name === 'Senators') {
              iconName = focused ? 'users' : 'users';
            } else if (route.name === 'Representatives') {
              iconName = focused ? 'users' : 'users';
            }
            // <FontAwesomeIcon icon="fa-solid fa-user-tie" />
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#c0032c',
          tabBarInactiveTintColor: '#002368',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Presidents" component={PresidentsScreen}/>
        <Tab.Screen name="Senators" component={SenatorsScreen} />
        <Tab.Screen name="Representatives" component={RepScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
