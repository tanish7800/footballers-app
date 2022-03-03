// Players in selected category 

import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import navigationOptions from 'react-navigation';
import Colors from '../constants/Colors';
import PlayerList from '../components/PlayerList';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryPlayersScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    
    const availablePlayers = useSelector(state => state.players.filteredPlayers);

    const displayedPlayers = availablePlayers.filter(
        player => player.categoryId.indexOf(catId) >=0
    );

    if(displayedPlayers.length === 0){
        return(
            <View style={styles.screen}>
                <DefaultText style={styles.main}>No Players Found</DefaultText>
                <DefaultText style={styles.sub}>Check the filters you added!</DefaultText>
            </View>
        );
    }

    return(
        <PlayerList listData={displayedPlayers} navigation={props.navigation}/>
    );
};

CategoryPlayersScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat=> cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    };
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

export default CategoryPlayersScreen;