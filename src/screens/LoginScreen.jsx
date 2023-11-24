import React, { useContext } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalThemes } from '../themes/globalThemes';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../contexts/AuthContext';
import { ErrorMessage } from '../components/ErrorMessage';
import { ThemeContext } from '../contexts/ThemeContext';
import { useEffect } from 'react';

export const LoginScreen = ({ navigation }) => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const { login, state } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Formato de email es incorrecto')
        .required('Este campo es obligatorio'),
      password: Yup.string()
        .required('Este campo es obligatorio')
        .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    }),
    onSubmit: (values, { resetForm }) => {
      login(formik.values);
      resetForm();
    },
  });

  return (
    <>
      <View>
        <Text style={[globalThemes.title, { color: colors.titleColor }]}>
          Bienvenid@s
        </Text>
      </View>
      <View style={globalThemes.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/avatar_2.jpg')}
          />
        </View>

        <View>
          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: colors.text, borderColor: colors.border },
            ]}
            placeholder="Correo"
            placeholderTextColor={colors.notification}
            keyboardType="email-address"
            name="email"
            onChangeText={(value) => formik.setFieldValue('email', value)}
          />
          {formik.errors.email && (
            <ErrorMessage message={formik.errors.email} />
          )}
          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: colors.text, borderColor: colors.border },
            ]}
            placeholder="Contraseña"
            placeholderTextColor={colors.notification}
            secureTextEntry={true}
            name="password"
            onChangeText={(value) => formik.setFieldValue('password', value)}
          />
          {formik.errors.password && (
            <ErrorMessage message={formik.errors.password} />
          )}
        </View>
        <View>
          <TouchableOpacity
            style={[
              globalThemes.defaultBtn,
              {
                backgroundColor: colors.primary,
                borderColor: colors.border,
              },
            ]}
            onPress={formik.handleSubmit}
          >
            <Text
              style={[
                globalThemes.defaulTextBtn,
                { color: colors.title },
              ]}
            >
              INGRESAR
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={[
              globalThemes.defaultBtn,
              {
                backgroundColor: colors.primary,
                borderColor: colors.border,
              },
            ]}
          >
            <Text
              style={[
                globalThemes.defaulTextBtn,
                { color: colors.title },
              ]}
            >
              REGISTRARSE
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[globalThemes.footer, { color: colors.text }]}>
            RollingAppRN
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
});
