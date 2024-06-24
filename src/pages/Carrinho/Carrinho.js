import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
 
export default function Carrinho({ navigation }) {
 
    return (
        <View style={styles.container}>
        <TouchableOpacity>
            <View style={styles.voltar}>
                <Image style={styles.img1} source={require('./assets/voltar.png')} />
            </View>
        </TouchableOpacity>
        <Image style={styles.car} source={require('./assets/car.svg')} />
        <Text style={styles.text}>Seu carrinho de compras se encotra vazio</Text>
        <Text style={styles.subtext}>Navegue pelas nossas ofertas incríveis agora!</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
            <View style={styles.compre}>
                <Text style={styles.agora}>Compre Agora</Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.gostar}>━━━━━━ Você Também Pode Gostar ━━━━━━</Text>
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
    voltar:{
        width: 40,
        height: 40,
        backgroundColor: '#f5f5f5',
        borderRadius: 50,
        top: -220,
        marginRight: 300,
    },
    img1:{
        width: 25,
        height: 25,
        top: 7,
        marginLeft: 7,
    },
    car:{
        width: 70,
        height: 70,
        top: -130,
        marginLeft: -5,
    },
    text:{
        fontSize: 18,
        fontWeight: '700',
        color: '#3f3f3f',
        top: -120,
    },
    subtext:{
        fontSize: 16,
        color: '#3f3f3f',
        top: -120,
        fontWeight: '500',
    },
    compre:{
        borderWidth: 1,
        borderColor: '#3D1365',
        width: 120,
        height: 40,
        top: -100,
    },
    agora:{
        color: '#3D1365',
        top: 8,
        marginLeft: 14,
        fontWeight: '500',
       
    },
    gostar:{
        top: -50,
        fontWeight: '500',
    }
   
})