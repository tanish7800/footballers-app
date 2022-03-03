import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryPlayersScreen from '../screens/CategoryPlayersScreen';
import PlayerDetailsScreen from '../screens/PlayerDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions =   {defaultNavigationOptions: {
                                    headerStyle: {
                                        backgroundColor: Platform.OS==='ios' ? '#5c7' : ''
                                    },
                                    headerTitleStyle:{
                                        fontWeight:'bold',
                                        fontSize:25
                                    },
                                    headerTintColor: Platform.OS==='ios' ? 'white' : Colors.primaryColor,
                                    }
                                }

const PlayersNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen ,
        navigationOptions:{
            headerTitle:'Player Categories'
        }
    },
    CategoryPlayers: {
        screen: CategoryPlayersScreen
    },    
    PlayerDetails: PlayerDetailsScreen
},defaultStackNavOptions);

const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    PlayerDetails: PlayerDetailsScreen
},defaultStackNavOptions);

const PlayersFavTabNavigator = createBottomTabNavigator({
    Players: {screen: PlayersNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="football" size={28} color={tabInfo.tintColor} />
        }
    }},
    Favourites :{ screen: FavNavigator , navigationOptions:{
        tabBarIcon:(tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        }
    }}
},{
    tabBarOptions:{
        activeTintColor: Colors.accentColor,
        inactiveTintColor: '#333',
        labelStyle:{
            fontSize:10,
            fontWeight:'bold'
        }
    }
});

const FiltersNav = createStackNavigator({
    Filters: FiltersScreen
},defaultStackNavOptions)

const mainNavigator = createDrawerNavigator({
    PlayersFavs: {screen: PlayersFavTabNavigator, navigationOptions:{
        drawerLabel:'Players'
    }},
    Filters: { screen: FiltersNav, navigationOptions:{
        drawerLabel: 'Filters'
    }}
},{
    contentOptions:{
        activeTintColor: Colors.accentColor,
        inactiveTintColor:  '#ccc',
        labelStyle:{
            fontWeight:'bold',
            fontSize:18
        }
    }
});



export default createAppContainer(mainNavigator);