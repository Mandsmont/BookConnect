import React from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import CampoInput from "../../components/CampoInput/Index";
import CampoButtonIns from "../../components/CampoButtonIns";
import Home from "../Home";


export default function inscrevaSe ( {navigation} ) {


        const entrar = () => {
            
            navigation.navigate('Home')
    
        };
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titulo}>
                    <Text style={styles.book}>BOOK</Text>
                    <Text style={styles.connect}>CONNECT</Text>
                </Text>
            </View>
            <Image source={require('../../../assets/cityconect.icon.svg')} style={styles.iconcia} />
            
            <Text style={styles.nome}>Nome Completo</Text>
            
            <CampoInput 
                label="Nome Completo"
                placeholder="Digite aqui seu nome completo"
                comMascara={false}
            />
            <Text style={styles.email}>E-mail</Text>
            
            <CampoInput 
                label="E-mail"
                placeholder="Digite aqui seu E-mail"
                comMascara={false}
            />
             <Text style={styles.senha}>Senha</Text>
             <CampoInput 
                label="Senha"
                placeholder="Digite aqui sua Senha"
                comMascara={true}
            />
             <CampoButtonIns 
                value="INSCREVA-SE"
                callback={entrar}
                
            />
        </View>
            
)}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleContainer: {
        backgroundColor: '#ffcb9c',
        width: '100%',
        paddingTop: 30,
        alignItems: 'center',
        paddingBottom: 20,
    },
    titulo: {
        fontSize: 50,
        flexDirection: 'row',
        textAlign: 'center',
        fontWeight: '700',
    },
    book: {
        color: '#f27706',
    },
    connect: {
        color: 'black',
    },
    iconcia: {
        alignItems: 'top',
        marginTop: -15,
    },
    nome: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 50,
        width: '100%',
        paddingHorizontal: 50,
        textAlign: 'left',
    },
    email: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 50,
        textAlign: 'left',
    },
    senha: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 50,
        textAlign: 'left',
    },
});