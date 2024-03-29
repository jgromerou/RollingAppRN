import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { AntDesign } from 'react-native-vector-icons';
import { CartContext } from '../../contexts/CartContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export const CartShop = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const { state } = useContext(CartContext);
  const { navigate } = useNavigation();
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.primary,
          marginHorizontal: 5,
          borderRadius: 50,
          borderColor: 'green',
          padding: 10,
          zIndex: 999,
          alignSelf: 'center',
          marginTop: 5,
        }}
      >
        <TouchableOpacity onPress={() => navigate('CheckoutScreen')}>
          <AntDesign
            name="shoppingcart"
            color={'rgba(255,255,255,1)'}
            size={28}
          />
          <View style={styles.BadgeCS}>
            <Badge backgroundColor="#fff" style={{ color: 'black' }}>
              {state.cart.length ? state.cart.length : 0}
            </Badge>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  head: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    top: -12,
    left: 15,
    alignItems: 'flex-end',
  },
  BadgeCS: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    top: -12,
    left: 15,
    alignItems: 'flex-end',
  },

  menuContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    zIndex: 999,
    alignSelf: 'center',
    marginTop: 30,
  },

  menuBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuBtnText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#ccc',
  },

  headImage: {
    width: 380,
    borderRadius: 15,
    opacity: 0.8,
    marginBottom: 15,
  },
});
