import React from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import CampoInput from "../../components/CampoInput/Index";
import CampoButton from "../../components/CampoButton";
import CampoButtonIns from "../../components/CampoButtonIns";
import inscrevaSe from "../inscrevaSe";


function Login({ navigation }) {
    const logar = () => {
        navigation.navigate('inscrevaSe')
    };
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
            <CampoButton 
                value="Entrar"
                callback={entrar}
                
            />
            <Text style={styles.seinscreva}>SE NÃO FOR INSCRITO AINDA:</Text>
            
            <CampoButtonIns 
                value="INSCREVA-SE"
                callback={logar}
            />
        </View>
        
    );
}

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
        fontWeight: '700', // fontWeight deve ser uma string
    },
    book: {
        color: '#f27706',
    },
    connect: {
        color: 'black',
    },
    icon: {
        width: 50,  // Ajuste o tamanho conforme necessário
        height: 50, // Ajuste o tamanho conforme necessário
        marginTop: 20, // Espaçamento acima do ícone
    },
    entrar: {
        backgroundColor: '#f27706', // Define a cor do botão como laranja
        width: '80%', // Ajuste conforme necessário
    },
    CampoInput: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20, // Espaçamento acima da descrição
        width: '100%',
        paddingHorizontal: 20, // Adiciona margem nas laterais
        textAlign: 'right', // Alinha o texto à esquerda
    },
    email: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 50, // Espaçamento acima da descrição
        width: '100%',
        paddingHorizontal: 20, // Adiciona margem nas laterais
        textAlign: 'left', // Alinha o texto à esquerda
    },
    senha: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20, // Espaçamento acima da descrição
        width: '100%',
        paddingHorizontal: 20, // Adiciona margem nas laterais
        textAlign: 'left', // Alinha o texto à esquerda
    },
    iconcia: {
        alignItems: 'top',
        marginTop: -15,
        

    },
   seinscreva: {
    fontSize: 10,
    fontWeight: 'condensed',
    marginTop: 15,
    color: 'gray',
    paddingHorizontal: 50,
    textAlign: 'left'
   }
    
   

});

export default Login;



// todo componente deve ser exportado
// view é parecida como a div do HTML, realizar separação
// Text se assemelha ao parágrafo - apresentar texto