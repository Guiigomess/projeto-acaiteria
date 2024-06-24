import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './pages/home/index';
import New from './pages//New/index';
import Notificacao from './pages/Notificacao/index';
import Perfil from './pages/Perfil/index';


import {Entypo, Feather } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feed from "./tabs/Feed";

const Tab = createBottomTabNavigator();

export default function Routes(){
    console.log("chgeui");
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ size, color}) => (
                <Entypo name="home" size={size} color={color}/>
            ) }}/>
             <Tab.Screen name="New" component={New} options={{ tabBarIcon: ({ size, color}) => (
                <Entypo name="favorites" size={size} color={color}/>
            ) }}/>
             <Tab.Screen name="Notificacao" component={Notificacao} options={{ tabBarIcon: ({ size, color}) => (
                <Entypo name="sino" size={size} color={color}/>
            ) }}/>
             <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarIcon: ({ size, color}) => (
                <Entypo name="user" size={size} color={color}/>
            ) }}/>
        </Tab.Navigator>
    );
}


