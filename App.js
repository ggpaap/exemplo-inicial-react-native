import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
export default function App() {
  return (
  
    <View style={styles.container}>
      <Header titulo="Lista de alunos" />
      <Header titulo="Lista de professores" />
      <Header titulo="Lista de desatentos" />
      <View>
      {/*tasks.map((tasks) => (
        <Text>{tasks}</Text>
      ))}
      </View>
      <StatusBar styles="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
