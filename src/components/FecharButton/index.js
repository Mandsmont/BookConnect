import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const FecharButton = (props) => {
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
        alignItems: 'top',
        backgroundColor: '#F57638',
        padding: 20,
        width: '100%',
        borderRadius: 15,
        marginTop: 0,
    
        
        

    },
    text: {
        fontSize: 15,
        color: 'black',
        fontWeight: 600,
        textAlign: 'center'

    }


})

export default FecharButton