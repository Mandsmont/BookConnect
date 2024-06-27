import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const AllButton = (props) => {
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
        padding: 6,
        width: '50%',
        borderRadius: 15,
        marginTop: 5,
    
        
        

    },
    text: {
        fontSize: 15,
        color: 'black',
        fontWeight: 600,
        textAlign: 'center'

    }


})

export default AllButton