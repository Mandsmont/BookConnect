import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const CampoButtonIns = (props) => {
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
        backgroundColor: 'black',
        padding: 6,
        width: 320,
        borderRadius: 15,
        marginTop: 5
        

    },
    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 600

    }


});

export default CampoButtonIns