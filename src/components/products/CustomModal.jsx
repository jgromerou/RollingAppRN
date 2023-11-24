import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState} from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Modal } from 'react-native'
import { View } from 'react-native'
import { Feather } from 'react-native-vector-icons';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';
import { globalThemes } from '../../themes/globalThemes';


export const CustomModal = ({closeAlert, visible, messageModal}) => {
    const {
        state: { colors },
      } = useContext(ThemeContext);
    
    //const [visible, setVisible] = useState(true);
    //console.log(messageModal)
  return (
    <View>
        <Modal 
            animationType='slide'
            visible={visible}
            transparent={true}
            hardwareAccelerated={true}
        > 
            <View style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.6)'
                //marginTop: 20,
            }}            
            >
                <View style={{
                    backgroundColor:'#fff',
                    //backgroundColor: colors.container,
                    alignItems: 'center',
                    margin: 30,
                    padding: 40,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2
                    }
                }}> 
                    <Feather name='x-octagon' size={35} color={colors.primary} />
                    <Text style={{ 
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginVertical: 10
                        //color: 'white'
                    }}>Message Cart Shopping</Text>
                    <Text style={{ fontSize: 15, textAlign: 'center'}}>
                        {messageModal}
                    </Text>
                    <View>
                        <Pressable style={[
                            styles.touchableBtn,{
                                backgroundColor: colors.primary,
                                borderColor: colors.text,
                                borderWidth: 3,
                                }]} onPress= { () => closeAlert(!visible)} > 
                            <Text style={globalThemes.defaulTextBtn}> Cerrar </Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    touchableBtn: {
        //backgroundColor: '#f2058b',
        
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 12
    },
    textBtn: {
        fontSize:15,
        color:  '#fff',
        fontWeight: '500'
    }
})
