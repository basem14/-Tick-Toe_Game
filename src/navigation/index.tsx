import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { View,ColorSchemeName } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import {
    
//   } from '../screens';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';
import FlashMessage from "react-native-flash-message";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { LoadingModal,Toast } from '../components';
import { store, persistor } from '../state/store';
import { Provider } from "react-redux";
import BottomTabNavigator from './BottomTabNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
  
        <Provider store={store}>
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
          </NavigationContainer>
  
          <LoadingModal />
  
          <Toast ref={(ref) => (global["toast"] = ref)} />
          <FlashMessage position="top" />
          </Provider>
     
    );
  }
  
  // A root stack navigator is often used for displaying modals on top of all other content
  // Read more here: https://reactnavigation.org/docs/modal
  const Stack = createStackNavigator();
  
  function RootNavigator() {
    const [windowToLoad, setWindowToLoad] = React.useState("");
    const [isConnected, setConnected] = React.useState(false);
  
  
    
  
    const networkState = useCallback((state) => {
      setConnected(state.isConnected);
    }, []);
    // if (!windowToLoad) {
    //   return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size={'large'} color={'black'} /></View>
    //   // return null
    // }
  
    
  
    return (
      <Stack.Navigator initialRouteName={windowToLoad} screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="LoginWindow" component={LoginWindow} /> */}
      <Stack.Screen name="Root" component={BottomTabNavigator} />

      </Stack.Navigator>
      
    );
  }