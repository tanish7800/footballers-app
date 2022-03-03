// Favourite Players appear here

import navigationOptions from 'react-navigation';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import PlayerList from '../components/PlayerList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavouritesScreen = props => {

    const favPlayers = useSelector(state=>state.players.favouritePlayers);

    if(favPlayers.length === 0 || !favPlayers ){
        return (
            <View style={styles.screen} >
                <DefaultText style={styles.main} >No Favourite Players Added Yet</DefaultText>
                <DefaultText style={styles.sub} >Start Adding Some Now!</DefaultText>
            </View>
        );
    }

    return(
        <PlayerList listData={favPlayers} navigation={props.navigation}/>
    );
};

FavouritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favourites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
              <Item title="Menu" iconName='ios-menu' onPress={()=>{
                navData.navigation.toggleDrawer();
              }}/>
            </HeaderButtons>)
        } 
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    main:{
        fontSize:20
    },
    sub:{
        fontSize:15,
        color:'#777'
    }
});

export default FavouritesScreen;