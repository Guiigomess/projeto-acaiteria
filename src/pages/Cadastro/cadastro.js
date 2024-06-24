import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Cadastro({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.SingIn}>Crie uma conta</Text>
            <Text style={styles.subtitulo}>Preencha seus dados abaixo ou cadastre-se{'\n'}                   com sua conta social</Text>
            <Text style={styles.txtemail}>Nome</Text>
            <TextInput
              style={styles.email} 
              placeholder='      Ex. Kaio Santos'
            />
            <Text style={styles.senha}>Email</Text>
            <TextInput 
            style={styles.senhainput}
            placeholder='      exemplo@gmail.com'
            />
            <Text style={styles.nome}>Senha</Text>
            <TextInput 
            style={styles.nomeinput}
            placeholder='      ********'
            secureTextEntry={true}
            />
            <Text style={styles.terms}>Concordar com  <TouchableOpacity> <Text style={styles.coloredText}>Termos e Condições</Text></TouchableOpacity>  </Text>
            <TouchableOpacity style={styles.Login} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.sing}>Cadastre-se</Text>
            </TouchableOpacity>
            <Text style={styles.continue}>━━━━━━ Ou cadastre-se com ━━━━━━</Text>
            <TouchableOpacity style={styles.redondo}>
                <Image style={styles.google} source={require('./assets/google.svg')}/>
            </TouchableOpacity>
             <TouchableOpacity style={styles.redondo2}>
                <Image style={styles.apple} source={require('./assets/apple.svg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.redondo3}>
                <Image style={styles.face} source={require('./assets/face.svg')}/>
            </TouchableOpacity>
            <Text style={styles.final}>Você já tem uma conta? 
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.final2}>
                    <Text style={styles.final2}> Entrar Agora</Text>
                </TouchableOpacity>
            </Text>
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
    SingIn:{
        fontSize: 30,
        fontWeight: 'bold',
        top: -30,
    },
    subtitulo:{
        top: -20,
    },
    txtemail:{
        fontSize: 15,
        fontWeight: 'bold',
        top: -10,
        marginRight: 310,
    },
    email:{
        width: '90%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginTop: -5,
    },
    senha:{
        fontSize: 15,
        fontWeight: 'bold',
        top: 20,
        marginRight: 310,
    },
    senhainput:{
        width: '90%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginTop: 25,
    },
    nome:{
        fontSize: 15,
        fontWeight: 'bold',
        top: 15,
        marginRight: 300,
    },
    nomeinput:{
        width: '90%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginTop: 25,
    },
    terms:{
        top: 10,
        fontWeight: 'bold',
        marginRight: 50,
    },
    Login:{
        width: '90%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#3D1365',
        top: 40,
    }, 
    sing:{
        fontSize: 18,
        fontWeight: '450' ,
        color: '#fff',
        marginLeft: 125,
        top: 12,
    }, 
    coloredText: {
        color: 'purple', 
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
        top: 90,
      },
      google:{
        width: 25,
        height: 25,
        marginLeft: 14,
        top: 14,
      },
      redondo2:{
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 50,
        top: 35,
        marginRight: 140,
      },
      apple:{
        width: 25,
        height: 25,
        marginLeft: 14,
        top: 14,
      },
      redondo3:{
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 50,
        top: -20,
        marginRight: -140,
      },
      face:{
        width: 25,
        height: 25,
        marginLeft: 14,
        top: 14,
      },
      final:{
        fontSize: 15,
        fontWeight: '500',
        top: 10,
      },
      final2:{
        color: 'purple',
      },
})