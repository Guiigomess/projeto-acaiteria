import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from "react-native";

export default function Verficacao({ navigation }) {
  const [code, setCode] = useState({ a: '', b: '', c: '', d: '' });

  const refA = useRef(null);
  const refB = useRef(null);
  const refC = useRef(null);
  const refD = useRef(null);

  const handleTextChange = (key, value) => {
    const numericValue = value.replace(/[^0-9]/g, ''); 
    setCode((prevCode) => {
      const newCode = { ...prevCode, [key]: numericValue };

    
      if (numericValue) {
        if (key === 'a') refB.current.focus();
        if (key === 'b') refC.current.focus();
        if (key === 'c') refD.current.focus();
      }
      return newCode;
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Emailortel')}>
        <Text style={styles.text}>Esqueci minha senha</Text>
        <Image source={require('./assets/left.png')} style={styles.imgleft} />
      </TouchableOpacity>
      <Text style={styles.opt}>Digite o código que enviamos para o </Text>
      <Text style={styles.emailconfrim}>kaiosan******@gmail.com</Text>
      <Text style={styles.number}></Text>

      <View style={styles.inputContainer}>
        <TextInput
          ref={refA}
          style={styles.input}
          value={code.a}
          onChangeText={(text) => handleTextChange('a', text)}
          keyboardType="numeric"
          maxLength={1}
          autoFocus
        />
        <TextInput
          ref={refB}
          style={styles.input}
          value={code.b}
          onChangeText={(text) => handleTextChange('b', text)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          ref={refC}
          style={styles.input}
          value={code.c}
          onChangeText={(text) => handleTextChange('c', text)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          ref={refD}
          style={styles.input}
          value={code.d}
          onChangeText={(text) => handleTextChange('d', text)}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>
      <TouchableOpacity style={styles.fim} onPress={() => console.log('Código inserido:', code)}>
        <Text onPress={() => navigation.navigate('Senha')} style={styles.continue}>Continue</Text>
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
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 20,
    top: 15,
  },
  imgleft: {
    width: 20,
    height: 20,
    top: -4,
  },
  number: {
    fontSize: 15,
    color: '#483D8B',
    fontWeight: 'bold',
    marginLeft: 130,
    top: 25,
  },
  opt: {
    marginLeft: 70,
    fontSize: 15,
    top: 105,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 90,
    marginTop: 170,
  },
  input: {
    width: 40,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  continue: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 65,
    top: 12,
  },
  fim: {
    width: '50%',
    height: 50,
    backgroundColor: '#3D1365',
    borderWidth: 1,
    borderColor: '#333',
    marginLeft: 100,
    borderRadius: 10,
    top: 300,
  },
  emailconfrim: {
    marginLeft: 105,
    fontSize: 15,
    fontWeight: 'bold',
    top: 105,
  }
});