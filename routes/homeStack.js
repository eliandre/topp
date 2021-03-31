import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Song from '../screens/song';
import Header from '../shared/header';

const screens = {
    TOPP: {
        screen: Home,
        navigationOptions: {
            headerTitle: () => <Header title='TOPP' />
        }
    },
    Laul: {
        screen: Song,
        navigationOptions: {
            title: 'Laulu detailid',
        }
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#F4DB7D',
            height: 100,
        },
        headerTitleStyle: {
            alignSelf: 'flex-start',
        }
    }
});

export default createAppContainer(HomeStack);