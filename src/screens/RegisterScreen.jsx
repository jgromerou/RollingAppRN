import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalThemes } from "../themes/globalThemes";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { useFormik } from "formik";
import * as Yup from "yup";

export const RegisterScreen = ({ navigation }) => {
  const [redirect, setRedirect] = useState(false);
  const { state } = useContext(ThemeContext);
  const {
    state: stateAuth,
    registerUser,
  } = useContext(AuthContext);
  const [backMessage, setBackMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre no debe tener menos de 3 caracteres")
        .max(20, "El nombre no debe tener más de 20 caracteres"),
      lastname: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El apellido no debe tener menos de 3 caracteres")
        .max(20, "El apellido no debe tener más de 20 caracteres"),
      email: Yup.string()
        .email("Formato de email es incorrecto")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .matches(
          /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/,
          "La contraseña debe tener mìnimo 8 caracteres , un n°, una minúscula, una mayúscula y no contener caracteres especiales."
        ),
    }),
    validateOnChange: false,

    onSubmit: () => {
      registerUser(formik.values);
      formik.resetForm();
      setRedirect(true);
      setBackMessage(stateAuth.errorMessage);
      setTimeout(() => {
        setBackMessage("");
      }, 3000);
    },
  });

  return (
    <>
    {redirect && navigation.navigate("LoginScreen")}
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

        {backMessage && <ErrorMessage message={backMessage} />}

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
    </>
  );
};
