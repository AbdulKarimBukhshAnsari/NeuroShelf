import { Stack , SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import "../global.css"
import  React , { useEffect } from 'react';


export default function _Layout() {
  SplashScreen.preventAutoHideAsync();

  const [fontsloaded , error] = useFonts({
    "Poppins-Bold" : require('../assets/fonts/Poppins-Bold.ttf') , 
    "Poppins-Regular" : require('../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Medium" : require('../assets/fonts/Poppins-Medium.ttf')
  }) 

  useEffect(() => {
    
    if(error) throw error 
    if(fontsloaded) {SplashScreen.hideAsync()};
  }, [fontsloaded , error])

  if(!fontsloaded && !error) {
    return null ;
  }
  

  return (

      <Stack >
        <Stack.Screen
          name='index'
          options={{headerShown :false}}

         />
      </Stack>
   
  );
}
