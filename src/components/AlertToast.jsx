import {
  StyleSheet,
  Animated,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useToast } from '../hooks/useToast';

export const AlertToast = ({ status, titulo }) => {

  const successColor = '#6dcf81';
  const successHeader = 'Éxito';
  const successMessage = `Se ${titulo} exitosamente`;
  const failColor = '#bf6060';
  const failHeader = 'Error';
  const failMessage = 'Ocurrió un error, inténtelo nuevamente';
  const { instantPopOut } = useToast();
  return (
    <View style={styles.toastRow}>
      <AntDesign
        name={status === 'success' ? 'checkcircleo' : 'closecircleo'}
        size={24}
        color={status === 'success' ? successColor : failColor}
      />
      <View style={styles.toastText}>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
          {status === 'success' ? successHeader : failHeader}
        </Text>
        <Text style={{ fontSize: 12 }}>
          {status === 'success' ? successMessage : failMessage}
        </Text>
      </View>
      <TouchableOpacity onPress={instantPopOut}>
        <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toastRow: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  toastText: {
    width: '70%',
    padding: 2,
  },
});
