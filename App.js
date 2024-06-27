import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigate } from './src/utils/routes';



export default function App() {
  return (
      <NavigationContainer>
          <StackNavigate></StackNavigate>
      </NavigationContainer>
    
  );
}
// stylesheet é uma propriedade como se se fosse o css, não tem arquivo ".css"


//gera o apk no celular(app.json)