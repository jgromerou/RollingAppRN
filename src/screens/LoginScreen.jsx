import React, { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { globalThemes } from "../themes/globalThemes";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../contexts/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { ThemeContext } from "../contexts/ThemeContext";
import { CustomLoading } from "../components/CustomLoading";

export const LoginScreen = ({ navigation }) => {
  const {
    state: { colors },
  } = useContext(ThemeContext);

  const { login, state } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Formato de email es incorrecto")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .matches(
          /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/,
          "Los datos ingresados son incorrectos"
        )
        .required("Este campo es obligatorio"),
    }),
    onSubmit: () => {
      login(formik.values);
      formik.resetForm();
      setIsLoading(true);
    },
  });

  if (isLoading) {
    return <CustomLoading />;
  } else {
    return (
      <>
        <View>
          <Text style={[globalThemes.title, { color: colors.titleColor }]}>
            Bienvenid@s
          </Text>
        </View>
        <View style={[globalThemes.container, { color: colors.background }]}>
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
                { color: colors.text, borderColor: colors.border },
              ]}
              maxLength={40}
              placeholder="Correo"
              placeholderTextColor={colors.notification}
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
                { color: colors.text, borderColor: colors.border },
              ]}
              maxLength={30}
              placeholder="Contraseña"
              placeholderTextColor={colors.notification}
              secureTextEntry={true}
              name="password"
              value={formik.values.password}
              onChangeText={(value) => formik.setFieldValue("password", value)}
            />
            {formik.errors.password && (
              <ErrorMessage message={formik.errors.password} />
            )}
            {state.errorMessage && (
              <ErrorMessage message={state.errorMessage} />
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
                style={[globalThemes.defaulTextBtn, { color: colors.title }]}
              >
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
                  backgroundColor: colors.primary,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text
                style={[globalThemes.defaulTextBtn, { color: colors.title }]}
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
  }
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
