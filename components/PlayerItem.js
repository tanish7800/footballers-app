import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import DefaultText from './DefaultText';

const PlayerItem = props => {
    return (
        <View style={styles.playerItem} >
            <TouchableOpacity onPress={props.onSelectPlayer} >
                <View>
                    <View style={{...styles.playerRow, ...styles.playerHeader}}>
                        <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                        <Text style={styles.title} >{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.playerRow, ...styles.playerDetail}}>
                        <DefaultText>{props.age} Years</DefaultText>
                        <DefaultText>{props.nation.toUpperCase()}</DefaultText>
                        <DefaultText>{props.team.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    playerRow:{
        flexDirection:'row',
    },
    playerItem:{
        height:200,
        width:'100%',
        backgroundColor:'#ccc',
        marginVertical:10,
        borderRadius:15,
        overflow:'hidden'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center'
    },
    playerHeader:{
        height:'85%'
    },
    playerDetail:{
        height:'15%',
        backgroundColor:"#5c7",
        justifyContent:'space-between',
        paddingHorizontal:10,
        fontWeight:'bold',
        alignItems:'center'
    },
    bgImage:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    }
});

export default PlayerItem;