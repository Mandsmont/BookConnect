import React from "react";
import { SafeAreaView, TextInput, StyleSheet } from "react-native";

const Search = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder={props.placeholder}
                secureTextEntry={props.comMascara} 
            /> 
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
       
        paddingEnd: 20
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 5,
        padding: 8,
        width: '100%', 
        borderRadius: 15,
        color: 'black',
        fontSize: 12,
    }
});

export default Search;
