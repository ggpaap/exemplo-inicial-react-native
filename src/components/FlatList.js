import { StyleSheet, Text, View, FLatLista } from 'react-native';
import Header from './src/components/Header';
export default function App() {
    const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5',];
    return (
        <View style={Styles.container}>
            <Header />
            <View>
                <FLatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contatiner: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});