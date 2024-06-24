import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
 

export default function Home({ navigation }) {
    return (
     <ScrollView>
      <View style={styles.container}>
           <TouchableOpacity  onPress={() => navigation.navigate('Usuario')}>
               <View style={styles.user}>
                <Image style={styles.userimg} source={require('./assets/user3.svg')}/>
               </View>
           </TouchableOpacity>
           <Text style={styles.bemvindo}>Bem vindo!</Text>
           <Text style={styles.nome}>Kaio Santos</Text>
           <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}>
            <View  style={styles.notifica}>
                <Image  style={styles.imgnotifica} source={require('./assets/sino.svg')} />
            </View>
        </TouchableOpacity>
       <View>
        <Image style={styles.lupa} source={require('./assets/lupa2.svg')} />
       <TextInput 
        style={styles.pesquisa}
        placeholder="            Oque você esta procurando?"
        placeholderTextColor="#999"
        />
       </View>
       <Text style={styles.destaque}>Destaques da <Text style={styles.coloredText}>Semana</Text></Text>
       {/* <Image style={styles.imgcar} source={require('./assets/image.png')} /> */}
       <View  style={styles.imgcar}></View>
       
        <View>
            <Text style={styles.categoria}>Categorias</Text>
            <TouchableOpacity>
                <Text style={styles.vermais}>Ver mais</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho1}>
                    <Text style={styles.trufadinhotext}>Trufadinhos</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho2}>
                    <Text style={styles.tradicionais}>Tradicionais</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho3}>
                 <Text style={styles.sorvete}>Sorvtes</Text>
                 <Image style={styles.imgsorvete} source={require('./assets/sorvete.png')} />
                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho4}>
                    <Text style={styles.milk}>Milk Shake</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho5}>
                    <Text style={styles.barca}>Barcas</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                 <View style={styles.trufadinho6}>
                    <Text style={styles.marmita}>Marmitas</Text>
                 </View>
            </TouchableOpacity>
        </View>
      </View>
     </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navegation:{
        width: 200,
        height: 40,
        backgroundColor: '#333',
        borderRadius: 25,
    },
    user:{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#f5f5f5',
        top: 5,
        marginLeft: -180,
    },
    userimg:{
        width: 50,
        height: 50,
        top: 10,
        marginLeft: 0,
        top: 0,
    },
    bemvindo:{
        fontSize: 15,
        marginRight: 165,
        top: -40,
    },
    nome:{
        fontSize: 18,
        fontWeight: '700',
        top: -45,
        marginRight: 140,
    },
    notifica:{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        top: -90,
        marginLeft: 330,
        
    },
    imgnotifica:{
        width: 30,
        height: 30,
        top: 10,
        marginLeft: 10,
    },
    pesquisa:{
        width: 370,
        height: 40,
        backgroundColor: '#f5f5f5',
        marginLeft: 0,
        borderRadius: 25,
        marginTop: -90,
        fontSize: 10,
    },
    lupa:{
        width: 15,
        height: 15,
        top: -62,
        marginLeft: 10,
        opacity: 0.5,
    },
    destaque:{
        fontSize: 20,
        marginRight: 160,
        fontWeight: '700',
        top: -20,
    },
    coloredText:{
        color: '#3D1365'
    },
    imgcar:{
        width: 370,
        height: 200,
        borderRadius: 25,
        top: -10,
        backgroundColor: '#333'
    },
    categoria:{
        fontSize: 20,
        marginLeft: 15,
        top: 40,
        fontWeight: '700',
    },
    trufadinho1:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#84504C',
        top: 30,
        marginLeft: 10,
    },
    trufadinho2:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#341A1F',
        top: -80,
        marginLeft: 210,
    },
    trufadinho3:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#C3A08C',
        top: -60,
        marginLeft: 10,
    },
    trufadinho4:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#F3ADAD',
        top: -170,
        marginLeft: 210,
    },
    trufadinho5:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#E4DEC3',
        top: -150,
        marginLeft: 10,
    },
    trufadinho6:{
        width: 170,
        height: 110,
        borderRadius: 25,
        backgroundColor: '#D5D4DA',
        top: -260,
        marginLeft: 210,
    },
    trufadinhotext:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        top: 5,
       marginLeft: 5,
    },
    tradicionais:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        top: 5,
        marginLeft: 5,
    },
    sorvete:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        top: 5,
        marginLeft: 5, 
    },
    milk:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        top: 5,
        marginLeft: 5, 
    },
    barca:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        top: 5,
        marginLeft: 5, 
    },
    marmita:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        top: 5,
        marginLeft: 5, 
    },
    vermais:{
        fontSize: 15,
        fontWeight: '600',
        color: '#3D1365',
        marginLeft: 315,
        top: 15,
    },
    imgsorvete:{
        width: 80,
        height: 80,
        marginLeft: 80,
        top: 10
    }
});
