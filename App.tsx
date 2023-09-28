import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserEmailCreate } from './src/notifications/notificationsTags';

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize('878f2e4d-8975-4e79-b767-d7dca8691a9d');

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate('anderson@zenfisio.com');

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>{fontsLoaded ? <Routes /> : <Loading />}</CartContextProvider>
    </NativeBaseProvider>
  );
}
