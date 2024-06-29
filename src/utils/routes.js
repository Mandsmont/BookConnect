import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import inscrevaSe from '../screens/inscrevaSe'; // Adjust import to match the filename
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Carrinho from '../screens/Carrinho';
import Pesquisa from '../screens/Pesquisa';
import Comunidade from '../screens/Comunidade';
import PaginaHp from '../screens/PaginaHp/Index';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { FontAwesome } from '@expo/vector-icons';

export const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="inscrevaSe"
                component={inscrevaSe}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="Home"
                component={TabNavigate}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen 
             name="PaginaHp" 
             component={PaginaHp} 
             options={{
             headerShown: false
                }}
                />
        </Stack.Navigator>
    );
};

export const TabNavigate = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={({ focused }) => ({
                    tabBarIcon: () => (
                        <FontAwesome
                            name="home"
                            size={24}
                            color={focused ? 'tomato' : 'black'} // Change icon color here
                        />
                    ),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            />
            <Tab.Screen
                name="Pesquisa"
                component={Pesquisa}
                options={({ focused }) => ({
                    tabBarIcon: () => (
                        <FontAwesome
                            name="search"
                            size={24}
                            color={focused ? 'tomato' : 'black'} // Change icon color here
                        />
                    ),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            />
            <Tab.Screen
                name="Carrinho"
                component={Carrinho}
                options={({ focused }) => ({
                    tabBarIcon: () => (
                        <FontAwesome
                            name="shopping-cart"
                            size={24}
                            color={focused ? 'tomato' : 'black'} // Change icon color here
                        />
                    ),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={({ focused }) => ({
                    tabBarIcon: () => (
                        <FontAwesome
                            name="user"
                            size={24}
                            color={focused ? 'tomato' : 'black'} // Change icon color here
                        />
                    ),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            />
            <Tab.Screen
                name="Comunidade"
                component={Comunidade}
                options={({ focused }) => ({
                    tabBarIcon: () => (
                        <FontAwesome
                            name="users"
                            size={24}
                            color={focused ? 'tomato' : 'black'} // Change icon color here
                        />
                    ),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            />
        </Tab.Navigator>


    );
};
