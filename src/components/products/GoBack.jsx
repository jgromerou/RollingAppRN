import React, {useContext} from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { ThemeContext } from '../../contexts/ThemeContext';
import { CartContext } from '../../contexts/CartContext';

export const GoBack = ({navigation}) => {
    const {
        state: { colors },
    } = useContext(ThemeContext);

    const { calculateCart, initLoading } = useContext(CartContext);
  return (
    <View style={{ 
        backgroundColor: colors.primary,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 1,
        zIndex:999,
        marginTop: 2,
        marginBottom: 5       
      }}>
        <TouchableOpacity 
              onPress={() => {calculateCart(); navigation.goBack();}}
          >
            <AntDesign 
                  name="left" 
                  color={'rgba(255,255,255,1)'}  
                  size={28}
            />
        </TouchableOpacity>
    </View>
  )
}
