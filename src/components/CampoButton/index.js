import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const CampoButton = (props) => {
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
        backgroundColor: '#F57638',
        padding: 6,
        width: 320,
        borderRadius: 15,
        marginTop: 30
        

    },
    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 600

    }


})

export default CampoButton