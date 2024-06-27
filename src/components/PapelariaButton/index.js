import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const PapelariaButton = (props) => {
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
       
        backgroundColor: 'orange',
        padding: 6,
        marginVertical: 20,
        width: '100%',
        borderRadius: 15,
        marginBottom: 15, 
    },
    text: {
        fontSize: 15,
        color: 'black',
        fontWeight: 400,
        textAlign: 'center',

    }


});

export default PapelariaButton