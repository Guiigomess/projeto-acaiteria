import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pagamentos({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image style={styles.voltar} source={require('./assets/voltar.svg')} />
            </TouchableOpacity>
            <Text style={styles.sessionText}>Meus Cartões</Text>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image source={require('./assets/mc.svg')} style={styles.profileImage} />
                </View>
                <View style={styles.card}>
                    <Image source={require('./assets/apple.svg')} style={styles.profileImage} />
                </View>
                <View style={styles.card}>
                    <Image source={require('./assets/paypal.svg')} style={styles.profileImage} />
                </View>
            </View>

            <View style={styles.largeContainer}>
                    <Image 
                        source={require('./assets/cartao.png')} // Substitua pelo caminho real da imagem
                        style={styles.largeImage}
                    />
                </View>

                <View style={styles.info}>
      <View>
        <Text style={styles.titulo}>Número do cartão</Text>
        <TouchableOpacity>
          <Text style={styles.dados}>1234 5678 9101 112</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Nome do Titular</Text>
        <TouchableOpacity>
          <Text style={styles.dados}>Guilherme Gomes Barbosa</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.titulo}>Validade</Text>
            <TouchableOpacity>
              <Text style={styles.dados}>02/25</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.titulo}>CVV</Text>
            <TouchableOpacity>
              <Text style={styles.cvv}>123</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  <TouchableOpacity style={styles.buy}>
    <Text>COMPRAR AGORA</Text>
  </TouchableOpacity>
    

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20, // Adicionado para ajustar o espaçamento do topo
    },
    backButton: {
        position: 'absolute',
        top: 0,
        left: 10,
        padding: 10,
        zIndex: 1, // Garante que o botão fique sobre outros componentes
    },
    voltar: {
        width: 30,
        height: 30,
        tintColor: 'purple', // Alterado de 'color' para 'tintColor'
    },
    sessionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20, // Adicionado para criar espaço abaixo do texto
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    profileImage: {
        width: 50,
        height: 30,
        borderRadius: 5,
    },
    largeContainer: {
        width: '90%',
        height: 200,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    largeImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    info: {
        marginRight: 100,
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        top:15,
        width: 250,
        height: 250,
    
      },
      titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
      },
      dados: {
        fontSize: 16,
        marginTop: 5,
      },
      cvv: {
        fontSize: 16,
        marginTop: 5,
        color: 'red', 
      },

      buy:{
        width:150,
        height:150,
        backgroundColor:'purple',
        fontSize:15,
        borderRadius:10,
        color:'white'


      }
    
});
