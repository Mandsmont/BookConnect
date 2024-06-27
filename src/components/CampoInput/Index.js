import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text} from "react-native"

const CampoInput = (props) => {
    return (
        <SafeAreaView>
            <TextInput 
            style = {styles.input}
            placeholder={props.placeholder}
            secureTextEntry={props.comMascara}/> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginBottom: 15,
        marginTop: 3,
        padding: 10,
        width: 320, 
        borderRadius: 15,
        color: 'black',
        fontSize: 18,
       

    }
})

export default CampoInput; 