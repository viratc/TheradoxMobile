import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar />
      <Home />
    </NavigationContainer>
  );
}
