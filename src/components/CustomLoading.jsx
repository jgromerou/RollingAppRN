import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { globalThemes } from '../themes/globalThemes';
import { ThemeContext } from '../contexts/ThemeContext';


export const CustomLoading = () => {
const {state}=useContext(ThemeContext)
  return (
    <View style={[globalThemes.container, styles.horizontal, {backgroundColor:state.colors.background}]}>
        <ActivityIndicator size="large" color={state.colors.contrastColor}   />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});