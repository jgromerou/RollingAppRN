import React from "react";
import { Alert } from "react-native";

export const AlertComponent = (title, mess, btnTxt, btnFun) => {
  return Alert.alert(title, mess, [
    { 
      text: btnTxt, 
      onPress: btnFun 
    }
  ]);
};
