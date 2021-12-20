import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import * as React from 'react';

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  
    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
      async function loadResourcesAndDataAsync() {
        try {
          SplashScreen.preventAutoHideAsync();

          await Font.loadAsync({
            ...Ionicons.font,
            'bold': require('../../assets/fonts/URW-DIN-Arabic-Black.ttf'),  
          });
  
        } catch (e) {
          // We might want to provide this error information to an error reporting service
          console.warn(e);
        } finally {
          setLoadingComplete(true);
          SplashScreen.hideAsync();
        }
      }
  
      loadResourcesAndDataAsync();
    }, []);
  
    return isLoadingComplete;
  }