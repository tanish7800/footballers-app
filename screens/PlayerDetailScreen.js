// Details of selected players ( Stats )

import React, { useEffect,useCallback } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Button, ColorPropType } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import navigationOptions from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  CustomHeaderButton  from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { toggleFavourite } from '../store/actions/players';

const PlayerDetailsScreen = props => {
    const playerId = props.navigation.getParam('playerId');

    const currentPlayerIsFavourite = useSelector( state => state.players.favouritePlayers.some( player => player.id === playerId ));

    const availablePlayers = useSelector(state => state.players.players);

    const selectedPlayer = availablePlayers.find(player => player.id === playerId);

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(playerId));
    },[dispatch,playerId]);

     useEffect(() => {
    //     props.navigation.setParams({playerName: selectedPlayer.name});
        props.navigation.setParams({ toggleFav : toggleFavouriteHandler })
    } , [toggleFavouriteHandler]);

    useEffect( () => {
        props.navigation.setParams({isFav : currentPlayerIsFavourite})
    } , [currentPlayerIsFavourite] );
    

    return(
        <ScrollView>
            <Image source={{uri:selectedPlayer.imageURL}} style={styles.image} />
            <View style={styles.details} >
                <DefaultText style={styles.detail}>{selectedPlayer.age} Years</DefaultText>
                <DefaultText style={styles.detail}>{selectedPlayer.nation.toUpperCase()}</DefaultText>
                <DefaultText style={styles.detail}>{selectedPlayer.team.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title} >ADDITIONAL INFORMATION</Text>
            <View style={styles.temp} >
                <Text style={styles.additional} >{selectedPlayer.additional_info}</Text>
            </View>
        </ScrollView>
    );
};

PlayerDetailsScreen.navigationOptions = navigationData => {
    //const playerId = navigationData.navigation.getParam('playerId');
    const playerName = navigationData.navigation.getParam('playerName');
    const toggleFavourite = navigationData.navigation.getParam('toggleFav');
    const isFavourite = navigationData.navigation.getParam('isFav');

    return {
        headerTitle: playerName,
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item title='Favourite' iconName={isFavourite ? 'ios-star' : 'ios-star-outline' } onPress={ toggleFavourite }/>
        </HeaderButtons>,
    };
};

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    detail:{
        color: Colors.accentColor
    },
    title:{
        marginVertical:10,
        fontSize:24,
        textAlign:'center'
    },
    additional:{
        color: Colors.accentColor,
        textAlign:'center'
    },
    temp:{
        padding:15,
        justifyContent:'space-around',
        backgroundColor: 'rgba(0,0,0,0.7)',
        height:'100%'
    }
});

export default PlayerDetailsScreen;