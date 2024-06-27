import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import Search from "../../components/SearchInput/search";
import PapelariaButton from "../../components/PapelariaButton";
import AllButton from "../../components/AllButton";

const buttonsData = [
    { id: '1', value: 'ROMANCE' },
    { id: '2', value: 'FICÇÃO CIENTÍFICA' },
    { id: '3', value: 'FANTASIA' },
    { id: '4', value: 'TERROR' },
    { id: '5', value: 'SUSPENSE' },
    { id: '6', value: 'DRAMA' },
    { id: '7', value: 'COMÉDIA' },
    { id: '8', value: 'HISTÓRIA' },
    { id: '9', value: 'INFANTIL' },
    { id: '10', value: 'AUTOAJUDA' },
    { id: '11', value: 'GUERRA' },
    { id: '12', value: 'FILOSOFIA' },
    { id: '13', value: 'SAÚDE' },
    { id: '14', value: 'ESPORTE' },
    { id: '15', value: 'CRIMINAL' },
    { id: '16', value: 'TERROR' },
    { id: '17', value: 'POESIA' },
    { id: '18', value: 'BIOGRAFIA' },
    { id: '19', value: 'QUADRINHOS' },
    { id: '20', value: 'RECEITAS' },
    { id: '21', value: 'DIDÁTICOS' },
    { id: '22', value: 'MÚSICA' },
    { id: '23', value: 'NEGÓCIOS' },
    { id: '24', value: 'MISTÉRIO' },
];

export default function Pesquisa() {
    const renderButton = ({ item }) => (
        <AllButton
            style={styles.button}
            value={item.value}
        />
    );

    return (
        <ScrollView style={styles.container}>
            <Search
                placeholder="Para onde te levará a próxima página?"
                comMascara={false}
            />
            <PapelariaButton
                style={styles.papelaria}
                value="Papelaria"
            />
            <FlatList
                data={buttonsData}
                renderItem={renderButton}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      
        backgroundColor: 'white',
        padding: 20,
    },
    flatListContent: {
        marginTop: -40,
    },
   
});
