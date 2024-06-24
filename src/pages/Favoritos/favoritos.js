import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import trufadoImage from '././assets/trufado.jpeg';
import tradicionaisImage from '././assets/tradicionais.jpeg';
import bananaImage from '././assets/banana.jpeg';
import morangoImage from '././assets/morango.jpeg';
import ninhoImage from '././assets/ninho.jpeg';
import granolaImage from '././assets/granola.jpeg';

export default function Favoritos({ navigation }) {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (item) => {
        if (favorites.includes(item.id)) {
            setFavorites(favorites.filter(fav => fav !== item.id));
        } else {
            setFavorites([...favorites, item.id]);
        }
    };

    const items = [
        { id: 1, name: 'Açaí trufado 500ml', price: '21,99', image: trufadoImage },
        { id: 2, name: 'Açaí trad 500ml', price: '15,99', image: tradicionaisImage },
        { id: 3, name: 'Açaí c/ banana 500ml', price: '16,99', image: bananaImage },
        { id: 4, name: 'Açaí c/ morango 500ml', price: '17,99', image: morangoImage },
        { id: 5, name: 'Açaí c/ leite ninho 500ml', price: '18,99', image: ninhoImage },
        { id: 6, name: 'Açaí c/ granola 500ml', price: '19,99', image: granolaImage },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image style={styles.voltar} source={require('././assets/voltar.svg')} />
                </TouchableOpacity>

                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search..."
                    />
                    <Image style={styles.searchIcon} source={require('././assets/lupa.svg')} />
                </View>

                <Text style={styles.titulo}>
                    Favoritos
                </Text>

                <View style={styles.itemsContainer}>
                    {items.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.itemWrapper} onPress={() => navigation.navigate('Detalhes', { itemId: item.id })}>
                            <View style={styles.itemContainer}>
                                <Image style={styles.itemImage} source={item.image} />
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                            </View>
                            <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite(item)}>
                                <Image
                                    style={styles.favoriteIcon}
                                    source={require('././assets/heart.png')}
                                    tintColor={favorites.includes(item.id) ? 'red' : 'black'}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C1A7D',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    backButton: {
        position: 'absolute',
        top: -10,
        marginRight: 20,
        padding: 10,
        zIndex: 1,
    },
    voltar: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 10,
        width: '90%',
        top:10,
    },
    searchBar: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        marginLeft:15,
        
    },
    searchIcon: {
        position: 'absolute',
        right: 15,
        width: 20,
        height: 20,
    },
    titulo: {
        fontSize: 25,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
        color: 'white',
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    itemWrapper: {
        width: '45%',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
    },
    itemContainer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    itemImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    itemPrice: {
        fontSize: 14,
        marginTop: 5,
    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 20,
        padding: 5,
    },
    favoriteIcon: {
        width: 20,
        height: 20,
    },
});
