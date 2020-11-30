import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from "./screens/Homepage";
import SearchByCity from './screens/SearchByCity';
import SearchByCountry from './screens/searchByCountry';
import Population from './screens/Population';
import TopCities from './screens/TopCities';

const Stack = createStackNavigator();

const nothing = ({ current }) => ({
	cardStyle: {}
});

function MyStack() {

  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        //cardStyleInterpolator: nothing,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="home" component={Homepage} />
      <Stack.Screen name="searchByCity" component={SearchByCity} />
      <Stack.Screen name="searchByCountry" component={SearchByCountry} />
      <Stack.Screen name="population" component={Population} />
      <Stack.Screen name="topCities" component={TopCities} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
      <MyStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
