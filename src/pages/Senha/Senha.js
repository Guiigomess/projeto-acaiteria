import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Senha({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Crie uma nova senha</Text>
            <Text style={styles.subtt}>Crie uma senha com pelo menos 6 letras e{'\n'}números. Você precisará dessa senha para{'\n'}entrar na sua conta</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Verficacao')}>
                <Image style={styles.img} source={require('./assets/left.png')} />
            </TouchableOpacity>
            <TextInput 
            style={styles.senha1}
            placeholder="    Nova senha"
            secureTextEntry={true}
            />
            <Text style={styles.opcao}>Desconectar de outros dispositivos.{'\n'}Escolha esta opção se outra pessoa usou{'\n'}sua conta</Text>
            <TouchableOpacity style={styles.botao}>
                <Text  onPress={() => navigation.navigate('Login')} style={styles.conf}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        top: -335,
        marginLeft: -110,
    },
    subtt:{
        top: -335,
        marginRight: 90,
    },
    senha1:{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
       marginTop: -340,
    },
    senha2:{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        marginTop: 10,
    },
    senha3:{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        marginTop: 10,
    },
    botao:{
        width: '90%',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#3D1365',
      top: 330,
    },
    conf:{
        fontSize: 18,
        fontWeight: '450' ,
        color: '#fff',
        marginLeft: 135,
        top: 12,
    },
    img:{
        width: 25,
        height: 25,
        top: -445,
        marginRight: 340,
    },
    opcao:{
        top: 15,
        marginRight: 30,
    }
});