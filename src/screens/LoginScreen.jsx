import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { globalThemes } from "../themes/globalThemes";
import { ThemeContext } from "../contexts/ThemeContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../contexts/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";


export const LoginScreen = ({ navigation }) => {
  const { state } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Formato de email es incorrecto")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(8, "La contraseña debe tener al menos 8 caracteres"),
    }),
    onSubmit: (values) => {
      console.log(values);
      login(formik.values);
    },
  });

  return (
    <>
      <View>
        <Text style={[globalThemes.title, { color: state.colors.titleColor }]}>
          Bienvenid@s
        </Text>
      </View>
      <View style={state.container}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/avatar_2.jpg")}
          />
        </View>

        <View>
          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: state.colors.text, borderColor: state.colors.border },
            ]}
            placeholder="Correo"
            placeholderTextColor={state.colors.notification}
            keyboardType="email-address"
            name="email"
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
            onChangeText={(value) => formik.setFieldValue("password", value)}
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
                backgroundColor: state.colors.primary,
                borderColor: state.colors.border,
              },
            ]}
            onPress={formik.handleSubmit}
          >
            <Text style={[globalThemes.defaulTextBtn, { color: state.colors.contrastColor }]}>
              
              INGRESAR
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
            style={[
              globalThemes.defaultBtn,
              {
                backgroundColor: state.colors.primary,
                borderColor: state.colors.border,
              },
            ]}
          >
            <Text style={[globalThemes.defaulTextBtn, { color: state.colors.contrastColor }]}>
              
              REGISTRARSE
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[globalThemes.footer, { color: state.colors.text }]}>
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
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: 10,
  },
});
