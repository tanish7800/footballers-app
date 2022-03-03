import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';
import DefaultText from './DefaultText';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
          <View style={{...styles.container, ... {backgroundColor: props.color}}}>
              <DefaultText style={styles.title} numberOfLines={2}>{props.title}</DefaultText>
          </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10,
        overflow: Platform.OS==='android' && Platform.Version >= 21 ?'hidden':'visible',
        elevation:5
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:2,
        shadowOffset:{width:0,height:2},
        shadowRadius:5,
        elevation:3,
        padding: 15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
});

export default CategoryGridTile;