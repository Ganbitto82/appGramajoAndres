import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text> ************ </Text>
       <Text>  Hola Coder! </Text>
       <Text> ************ </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CDB57',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
