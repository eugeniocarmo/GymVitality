import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from '@theme/index';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

import { AuthContext } from '@contexts/AuthContext';

export default function App() {
 const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  
 return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="202024"
        translucent
      />
      <AuthContext.Provider value ={{
        user:{
          id: '1',
          name: 'Eugenio',
          email: 'eugenio@email.com',
          avatar: 'eugenio.png'
        }
      }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>

    </NativeBaseProvider>
  );
}