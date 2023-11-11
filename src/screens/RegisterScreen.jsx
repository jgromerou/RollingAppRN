import React, { useContext } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalThemes } from "../themes/globalThemes";
import { ThemeContext } from "../contexts/ThemeContext";
//import { CustomModal } from "../../components/CustomModal";

export const RegisterScreen = () => {
  const { state } = useContext(ThemeContext);

  // const showAlert = ()=>{
  //   Alert.alert(
  //     'Error Acceso',
  //     'Los datos ingresados son incorrectos',
  //     [
  //       {
  //         text: 'Camcelar',
  //         onPress: ()=>Alert.alert(
  //           'Usuario Bloqueado',
  //           'Los datos ingresados son incorrectos',
  //           [
  //             {
  //               text: 'Cerrar',
  //               style: 'cancel'
  //             }
  //           ]
  //         ),
  //         style: 'cancel'
  //       },
  //       {
  //         text: 'Ok',
  //         onPress: ()=>{console.log('ok')},
  //         style: 'default'
  //       }
  //     ]
  //   )
  // }

  return (
    <>
      <View>
        <Text style={[globalThemes.title, { color: state.colors.titleColor }]}>
          Bienvenidos
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
          />
          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: state.colors.text, borderColor: state.colors.border },
            ]}
            placeholder="Apellido"
            placeholderTextColor={state.colors.notification}
          />
          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: state.colors.text, borderColor: state.colors.border },
            ]}
            placeholder="Correo"
            placeholderTextColor={state.colors.notification}
          />

          <TextInput
            style={[
              globalThemes.defaultInputText,
              { color: state.colors.text, borderColor: state.colors.border },
            ]}
            placeholder="Contraseña"
            placeholderTextColor={state.colors.notification}
            secureTextEntry={true}
          />
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
            //onPress={showAlert} //para usar con el alert
          >
            <Text style={[globalThemes.defaulTextBtn, { color: "#000" }]}>
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
      {/* <CustomModal/> */}
    </>
  );
};
