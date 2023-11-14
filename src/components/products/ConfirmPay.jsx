import React, { useContext } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native'
import { globalThemes } from '../../themes/globalThemes';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../contexts/ThemeContext';

export const ConfirmPay = () => {
    const { navigate } =  useNavigation();
    const {
        state: { colors },
      } = useContext(ThemeContext);
  return (
    <View style={{ 
            //globalThemes.container
            flex: 1,
            backgroundColor: colors.primary,
            padding: 10,
        }}>
        <View>
            <Text style={{color: 'white'}}>
            ConfirmPay
            </Text>
        </View>
        <View
            style={{
                flexDirection: "col",
                flex: 1,
                justifyContent: 'space-evenly',
                marginTop: 10,
                marginBottom: 5,
                //backgroundColor:'white',
                alignItems: 'center'

            }}
        >
        <TouchableOpacity
            style={{
                backgroundColor: "#f2058b",
                alignItems: "center",
                fontSize: "17",
                fontWeight: "600",
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 5,
                alignSelf:  'center'
            }}
            //onPress={() => navigate('ConfirmPay')}
            >
                <Text style={globalThemes.defaulTextBtn}>PAY</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}
