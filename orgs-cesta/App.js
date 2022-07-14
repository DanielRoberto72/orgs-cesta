import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonte] = useFonts({
    "mRegular": Montserrat_400Regular,
    "mBold": Montserrat_700Bold
  })

  if (!fonte){
    return(
      <View></View>
    )
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta />
      
    </SafeAreaView>
  );
}


