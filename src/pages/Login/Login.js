import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sing Up</Text>
            <Text style={styles.subtt}>Oi! Bem-vindo de volta, sentimos sua falta</Text>
            <Text style={styles.email}>Email</Text>
            <TextInput
            style={styles.inputemaill}
            placeholder="      exemplo@gmail.com" 
            />
            <Text style={styles.senha}>Senha</Text>
            <TextInput 
            style={styles.inpusenha}
            placeholder="      ********"
            secureTextEntry={true}
            />
            <TouchableOpacity>
              <Text  onPress={() => navigation.navigate('Emailortel')} style={styles.esqueceu} >Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginbloco}  onPress={() => navigation.navigate('Home')}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.continue}>━━━━━━ Ou logue com ━━━━━━</Text>
            <TouchableOpacity style={styles.redondo}>
              <Image style={styles.google} source={require('./assets/google.svg')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.redondo2}>
              <Image style={styles.face} source={require('./assets/face.svg')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.redondo3}>
              <Image style={styles.apple} source={require('./assets/apple.svg')} />
            </TouchableOpacity>
            <Text style={styles.final}>Não tem uma conta?<TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.final2}>
                    <Text style={styles.final2}> Vamos criar agora!</Text>
                </TouchableOpacity></Text>
            
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
      fontSize: 30,
      fontWeight: 'bold',
        top: -95,
        marginLeft: 0,
    },
    subtt:{
      top: -95,
    },
    email:{
      fontSize: 15,
      fontWeight: 'bold',
      top: -36,
      marginRight: 310,
    },
    inputemaill:{
      width: '90%',
      height: 50,
      marginTop: -30,
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
    },
    senha:{
      fontSize: 15,
      fontWeight: 'bold',
     marginRight: 300,
     top: 10,
    },
    inpusenha:{
      width: '90%',
      height: 50,
      marginTop: 15,
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
    },
    esqueceu:{
      color: 'purple',
      fontSize: 13,
      fontWeight: '600',
      marginLeft: 230,
      top: 5,
    },
    loginbloco:{
      width: '90%',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#3D1365',
      top: 50,
    },
    login:{
      fontSize: 18,
      fontWeight: '450' ,
      color: '#fff',
      marginLeft: 155,
      top: 12,
    },
    continue:{
      top: 70,
        opacity: 0.7,
    },
    redondo:{
      width: 55,
      height: 55,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 50,
      top:  100,
    },
    google:{
      width: 25,
      height: 25,
      top: 14,
      marginLeft: 14,
    },
    redondo2:{
      width: 55,
      height: 55,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 50,
      top:  45,
      marginLeft: 140,
    },
    face:{
      width: 25,
      height: 25,
      top: 14,
      marginLeft: 14,
    },
    redondo3:{
      width: 55,
      height: 55,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 50,
      top:  -10,
      marginLeft: -140,
    },
    apple:{
      width: 25,
      height: 25,
      top: 14,
      marginLeft: 14,
    },
    final:{
      fontSize: 15,
      fontWeight: '500',
      top: 80,
    },
    final2:{
      color: 'purple',
    },
});
