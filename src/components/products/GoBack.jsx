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
    <View style={ colors.container }>
        <TouchableOpacity 
              onPress={() => {calculateCart(); navigation.goBack();}}
          >
            <AntDesign 
                  name="left"  
                  color= { colors.text }
                  size={28}
            />
        </TouchableOpacity>
    </View>
  )
}
