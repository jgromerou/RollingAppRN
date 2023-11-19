import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState} from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Modal } from 'react-native'
import { View } from 'react-native'
import { Feather } from 'react-native-vector-icons';

export const CustomModal = ({closeAlert, visible}) => {
    //const [visible, setVisible] = useState(true);
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
                    <Feather name='x-octagon' size={35} color={'#f2058b'} />
                    <Text style={{ 
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginVertical: 10
                        //color: 'white'
                    }}>Error Cart Shopping</Text>
                    <Text style={{ fontSize: 15, textAlign: 'center'}}>
                        No puede agregar un producto en 0
                    </Text>
                    <View>
{/*                         <Pressable style={{
                            backgroundColor: '#f2058b',
                            fontSize: 16,
                            fontWeight: 'bold',
                            borderRadius: 5,
                            paddingVertical: 5,
                            paddingHorizontal:15,
                            marginVertical: 10
                        }}
                        > */}
                        <Pressable style={styles.touchableBtn} onPress= { () => closeAlert(!visible)} > 
                            <Text style={styles.textBtn}> Cerrar </Text>
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
        backgroundColor: '#f2058b',
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
