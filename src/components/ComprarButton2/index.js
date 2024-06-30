import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const ComprarButton = (props) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={props.callback}
            >
            <Text style={styles.text}>{props.value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 4,
        paddingVertical: 1,
        width: 100,
        height: 20,
        borderRadius: 5,
        marginTop: 0,
        marginRight: 10,
        marginLeft: 10,
        marginEnd: 10
        

    },
    text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 100, 
        alignItems: 'center'

    }


})

export default ComprarButton