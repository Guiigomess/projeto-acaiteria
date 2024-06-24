import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
 

export default function Notificacao({ navigation }) {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image style={styles.voltar} source={require('./assets/voltar.svg')} />
          </TouchableOpacity>
          <Text style={styles.config}>Notificações</Text>
           <View style={styles.linha}>
           </View>
           <Text style={styles.conf}>Notificações para você</Text>
        <View style={styles.quadro}>
         <Text style={styles.dias}>Últimos 7 dias</Text>
         <View style={styles.linha2}>
         </View>
         <TouchableOpacity>
           <Text style={styles.um}>Descubra as novidades mais quentes dos<Text style={styles.coloredText}> últimos dias!</Text></Text>
         </TouchableOpacity>
        </View>
        <TouchableOpacity>
         <View style={styles.mais}>
            <Text style={styles.carregar}>Carregar mais</Text>
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
    voltar:{
      width: 20,
      height: 20,
      marginRight: 350,
      top: -230,
    },
    config:{
      fontSize: 18,
      fontWeight: '600',
      top: -253,
    },
    linha:{
      width: 390,
      height: 1,
      backgroundColor: '#333',
      top: -245,
    },
    conf:{
      fontSize: 12,
      fontWeight: '600',
      marginRight: 235,
      top: -230,
    },
    quadro:{
      width: 360,
      height: 80,
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      marginLeft: 0,
      top: -220,
    },
    dias:{
      fontSize: 15,
      fontWeight: '600',
      top: 5,
      marginLeft: 5,
    },
    linha2:{
      width: 320,
      height: 1,
      backgroundColor: '#333',
      marginLeft: 40,
      top: 10,
    },
    um:{
      top: 15,
      fontSize: 13,
      fontWeight: '600',
      marginLeft: 5,
    },
    mais:{
      width: 360,
      height: 40,
      backgroundColor: '#3D1365',
      borderRadius: 20,
      top: -200,
      marginLeft: 0,
    },
    carregar:{
      fontSize: 12,
      fontWeight: '500',
      marginLeft: 140,
      top: 10,
      color: '#f5f5f5'
    },
    coloredText:{
      color: '#3D1365'
    }
  
});
