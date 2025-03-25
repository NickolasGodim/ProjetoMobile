import Home from './Screens/Home';
import Login from './Screens/Login';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  }});




