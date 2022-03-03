// //Forward, Midfield, Defense, Goalkeeper

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import navigationOptions from 'react-navigation';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton  from '../components/HeaderButton';

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return <CategoryGridTile title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={ () => {
                props.navigation.navigate({routeName: 'CategoryPlayers',params:{
                    categoryId:itemData.item.id
            }})
            }} />;
      };
      

    return (
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = navData => {
  return{  
    headerTitle: 'Player Categories',
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton} >
      <Item title="Menu" iconName='ios-menu' onPress={()=>{
        //navData.navigation.toggleDrawer();
        console.log(navData);
      }}/>
    </HeaderButtons>)
  } 
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;