import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function Emailortel({ navigation }) {
    const [selectedMethod, setSelectedMethod] = useState(null); 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Esqueceu a senha?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                <Image source={require('./assets/left.png')} style={styles.imgleft} />
            </TouchableOpacity>
            <Text style={styles.textinho}>
                Não se preocupe! Insira métodos{'\n'}selecionados de recuperação de senha abaixo.
            </Text>
            <TouchableOpacity
                style={selectedMethod === 'sms' ? styles.selectedRectangle : styles.rectangle}
                onPress={() => setSelectedMethod('sms')}
            >
                <Text style={selectedMethod === 'sms' ? styles.selectedText : styles.sms}>Via sms</Text>
                <Text style={selectedMethod === 'sms' ? styles.selectedText : styles.sms}>+5511913667672</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={selectedMethod === 'email' ? styles.selectedRectangle : styles.rectangle2}
                onPress={() => setSelectedMethod('email')}
            >
                <Text style={selectedMethod === 'email' ? styles.selectedText : styles.email}>Via email</Text>
                <Text style={selectedMethod === 'email' ? styles.selectedText : styles.email2}>kaiosantos07@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container3}>
                <View>
                    <Text onPress={() => navigation.navigate('Verficacao')} style={styles.continue}>Continue</Text>
                </View>
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
        fontSize: 17,
        fontWeight: 'bold',
        top: -180,
        marginLeft: -170,
    },
    imgleft: {
        width: 25,
        height: 25,
        top: -202,
        marginLeft: -180,
    },
    textinho: {
        fontSize: 14,
        top: -190,
        marginLeft: -55,
    },
    rectangle: {
        width: 350,
        height: 70,
        backgroundColor: '#483D8B',
        borderRadius: 10,
        borderColor: '#333',
    },
    sms: {
        fontSize: 13,
        color: '#fff',
        marginLeft: 50,
        top: 15,
    },
    number: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 50,
        top: 19,
    },
    continue: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 145,
        top: 15,
    },
    container3: {
        width: 350,
        height: 50,
        backgroundColor: '#483D8B',
        borderRadius: 10,
        top: 180,
    },
    rectangle2: {
        width: 350,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#333',
        top: 20,
    },
    email: {
        fontSize: 13,
        color: '#333',
        marginLeft: 50,
        top: 15,
    },
    email2: {
        fontSize: 13,
        color: '#333',
        marginLeft: 50,
        top: 19,
    },
    selectedRectangle: {
        width: 350,
        height: 70,
        backgroundColor: '#483D8B',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#333',
        top: 20,
    },
    selectedText: {
        fontSize: 13,
        color: '#fff',
        marginLeft: 50,
        top: 15,
    },
});
