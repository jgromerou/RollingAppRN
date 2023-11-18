import React, { useContext } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalThemes } from "../themes/globalThemes";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { useFormik } from "formik";
import * as Yup from "yup";


export const RegisterScreen = () => {

  const { state } = useContext(ThemeContext);
  const { registerUser } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      firstname: Yup.string()
      .required("Este campo es obligatorio"),
      lastname: Yup.string()
      .required("Este campo es obligatorio"),
      email: Yup.string()
        .email("Formato de email es incorrecto")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(8, "La contraseña debe tener al menos 8 caracteres"),
    }),
    onSubmit: (values) => {
      console.log(values);
      registerUser(formik.values);
    },
  });


  return (
    <>
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
    </>
  );
};
