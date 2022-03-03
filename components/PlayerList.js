import  React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'; 
import { useSelector } from 'react-redux';
import PlayerItem from './PlayerItem';


const PlayerList = props => {

    const favouritePlayers = useSelector( state => state.players.favouritePlayers );

    const renderPlayerItem = itemData => {
        const isFavourite = favouritePlayers.some( player => player.id === itemData.item.id );

        return (<PlayerItem  title={itemData.item.name} 
            age={itemData.item.age}
            team={itemData.item.team}
            nation={itemData.item.nation}
            image={itemData.item.imageURL} 
            onSelectPlayer={ ()=>{
                props.navigation.navigate({routeName:'PlayerDetails', params:{
                    playerId:itemData.item.id,
                    playerName:itemData.item.name,
                    isFav: isFavourite
                }})
            }}/>
        );
    }

    return(<View style={styles.screen}>
            <FlatList data={props.listData} keyExtractor={(item,index)=>item.id} renderItem={renderPlayerItem} style={{width:'100%'}} />
        </View>);
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
    }
});

export default PlayerList;