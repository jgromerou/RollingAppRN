import React from "react";
import { Text } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { globalThemes } from "../themes/globalThemes";

export const ErrorMessage = ({ message }) => {
  const { state } = useContext(ThemeContext);
  return (
    <Text
      style={[
        globalThemes.errorText,
        {
          color: state.colors.contrastColor,
        },
      ]}
    >
      {message}
    </Text>
  );
};
