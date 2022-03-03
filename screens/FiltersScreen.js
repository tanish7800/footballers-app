// Adding filters like nations, position etc.

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import navigationOptions from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux'; 
import { setFilters } from '../store/actions/players'

const FiltersScreen = props => {

    const { navigation } = props;
    const dispatch = useDispatch();
    const [isRetired, setIsRetired] = useState(false);
    const [isInjured, setIsInjured] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            injuredFilter: isInjured,
            retiredFilter: isRetired
        }
        dispatch(setFilters(appliedFilters));
    },[isInjured,isRetired,dispatch]);

    useEffect( () => {
        navigation.setParams({save: saveFilters});
    },[saveFilters]);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters </Text>
            <View style={styles.filterContainer}>
                <Text>Injured</Text>
                <Switch trackColor={{true:Colors.accentColor}} value={isInjured}  onValueChange={newValue=>setIsInjured(newValue)}/>
            </View>
            <View style={styles.filterContainer} > 
                <Text>Retired</Text>
                <Switch trackColor={{true:Colors.accentColor}} value={isRetired} onValueChange={newValue=>setIsRetired(newValue)} />
            </View>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
              <Item title="Menu" iconName='ios-menu' onPress={()=>{
                navData.navigation.toggleDrawer();
              }}/>
            </HeaderButtons>,
        headerRight: ()=> <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="Save" iconName='ios-checkmark' onPress={
                    navData.navigation.getParam('save')
                }/>
            </HeaderButtons>
        }
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        margin:20,
        textAlign:'center'
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'100%',
        margin:10
    },
});

export default FiltersScreen;