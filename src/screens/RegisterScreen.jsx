import React, { useContext, useRef, useState } from 'react';
import {
  Animated,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalThemes } from '../themes/globalThemes';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { ErrorMessage } from '../components/ErrorMessage';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AlertToast } from '../components/AlertToast';
import { useToast } from '../hooks/useToast';

export const RegisterScreen = ({ navigation }) => {
  const { state } = useContext(ThemeContext);
  const { state: stateAuth, registerUser } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required('Este campo es obligatorio')
        .min(3, 'El nombre no debe tener menos de 3 caracteres')
        .max(20, 'El nombre no debe tener más de 20 caracteres'),
      lastname: Yup.string()
        .required('Este campo es obligatorio')
        .min(3, 'El apellido no debe tener menos de 3 caracteres')
        .max(20, 'El apellido no debe tener más de 20 caracteres'),
      email: Yup.string()
        .email('Formato de email es incorrecto')
        .required('Este campo es obligatorio'),
      password: Yup.string()
        .required('Este campo es obligatorio')
        .matches(
          /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/,
          'La contraseña debe tener mìnimo 8 caracteres , un n°, una minúscula, una mayúscula y no contener caracteres especiales.'
        ),
    }),

    onSubmit: () => {
      registerUser(formik.values);
      formik.resetForm();
    },
  });

  const [status, setStatus] = useState(null);
  const { popIn, popAnim, setearStatus } = useToast();

  const navigateToLogin = () => {
    // navigation.navigate("LoginScreen")
  };

  return (
    <>
      {stateAuth.successRegister && navigation.navigate('LoginScreen')}

      {/* Toast View Animated */}
      {status && (
        <Animated.View
          style={[
            styles.toastContainer,
            {
              transform: [{ translateY: popAnim }],
            },
          ]}
        >
          <AlertToast status={status} titulo={'registró'} />
        </Animated.View>
      )}

      <View>
        <Text style={[globalThemes.title, { color: state.colors.titleColor }]}>
          Bienvenid@s
        </Text>
      </View>
      <View>
        <Text style={[globalThemes.text, { color: state.colors.text }]}>
          Por favor registrese para continuar navegando en nuestra app.
        </Text>
      </View>
      <View style={state.container}>
        <View>
          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: state.colors.text, borderColor: state.colors.border },
            ]}
            placeholder="Nombre"
            placeholderTextColor={state.colors.notification}
            name="firstname"
            value={formik.values.firstname}
            onChangeText={(value) => formik.setFieldValue("firstname", value)}
          />
          {formik.errors.firstname && (
            <ErrorMessage message={formik.errors.firstname} />
          )}
          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: state.colors.text, borderColor: state.colors.border },
            ]}
            placeholder="Apellido"
            placeholderTextColor={state.colors.notification}
            name="lastname"
            value={formik.values.lastname}
            onChangeText={(value) => formik.setFieldValue("lastname", value)}
          />
          {formik.errors.lastname && (
            <ErrorMessage message={formik.errors.lastname} />
          )}
          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: state.colors.text, borderColor: state.colors.border },
            ]}
            placeholder="Correo"
            placeholderTextColor={state.colors.notification}
            keyboardType="email-address"
            name="email"
            value={formik.values.email}
            onChangeText={(value) => formik.setFieldValue("email", value)}
          />
          {formik.errors.email && (
            <ErrorMessage message={formik.errors.email} />
          )}

          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: state.colors.text, borderColor: state.colors.border },
            ]}
            placeholder="Contraseña"
            placeholderTextColor={state.colors.notification}
            secureTextEntry={true}
            name="password"
            value={formik.values.password}
            onChangeText={(value) => formik.setFieldValue("password", value)}
          />
          {formik.errors.password && (
            <ErrorMessage message={formik.errors.password} />
          )}
        </View>
        {stateAuth.errorMessage && <ErrorMessage message={stateAuth.errorMessage} />}

        <View>
          <TouchableOpacity
            style={[
              globalThemes.defaultBtn,
              {
                backgroundColor: state.colors.primary,
                borderColor: state.colors.border,
              },
            ]}
            onPress={formik.handleSubmit}
          >
            <Text
              style={[
                globalThemes.defaulTextBtn,
                { color: state.colors.contrastColor },
              ]}
            >
              GUARDAR
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[globalThemes.footer, { color: state.colors.text }]}>
            RollingAppRN
          </Text>
        </View>
      </View> 
      {/* <View>
        {stateAuth.successRegister && 
        <AlertComponent
        title={'Registro'}
        mess={'Usuario registrado exitosamente'}
        btnTxt={'Ok'}
        btnFun={() => console.log('usuario registrado')}
      />
      }
      </View>

      Botones para probar los toast de success y fail
      {/* <Button
        title="Success Message"
        onPress={() => {
          setStatus('success');
          popIn();
        }}
        style={{ marginTop: 30 }}
      ></Button>
      <Button
        title="Fail Message"
        onPress={() => {
          setStatus('fail');
          popIn();
        }}
        style={{ marginTop: 30 }}
      ></Button> */}
    </>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    height: 60,
    width: '100%',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
