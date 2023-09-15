
import "./ignoreWarnings";

import { StyleSheet, Text, View } from 'react-native';
import { NavContainer } from './src/navigation/services/Index';




export default function App() {
  return (
    <View style={styles.container}>
      <NavContainer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
