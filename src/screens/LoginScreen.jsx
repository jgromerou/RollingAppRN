import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { globalThemes } from "../themes/globalThemes";
//import { CustomModal } from "../../components/CustomModal";

export const LoginScreen = () => {
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
      <View style={globalThemes.container}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/avatar_2.jpg")}
          />
        </View>

        <View>
          <TextInput
            style={globalThemes.defaultInputText}
            placeholder="Email"
            placeholderTextColor={"#637381"}
          />
            <TextInput
            style={globalThemes.defaultInputText}
            placeholder="Pass"
            placeholderTextColor={"#637381"}
          />
        </View>
        <View>
          <TouchableOpacity
            style={globalThemes.defaultBtn}
            //onPress={showAlert} //para usar con el alert
          >
            <Text style={globalThemes.defaulTextBtn}> INGRESAR </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={globalThemes.footer}>RollingAppRN</Text>
        </View>
      </View>
      {/* <CustomModal/> */}
    </>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: 30
  },
  inputText: {
    borderWidth: 2,
    borderColor: "#f2058b",
    borderRadius: 40,
    paddingVertical: 5,
    marginHorizontal: 15,
    marginVertical: 12,
    paddingHorizontal: 12,
    color: "#fff",
  },
  touchableBtn: {
    backgroundColor: "#f2058b",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: 12,
  },
  textBtn: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
});
