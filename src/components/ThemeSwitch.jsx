import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { Switch, Text, View } from 'react-native';

export const ThemeSwitch = () => {
    const {state: { colors },setDarkTheme, setLightTheme  } = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(false);
    const [nameTheme, setNameTheme] = useState("Tema claro");
    
    const toggleSwitch = () => {
      if (isEnabled) {
        setLightTheme();
        setIsEnabled(false);
        setNameTheme("Tema claro");
      } else {
        setDarkTheme();
        setIsEnabled(true);
        setNameTheme("Tema oscuro");
      }
    };
    return (
    <View
    style={{
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Switch 
            trackColor={{ false: "#2A3B47", true: "white" }}
            thumbColor={isEnabled ? "#A0A7AC" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ marginTop: 1 }}
        />
        <Text         
        style={{
          color: colors.text,
          fontSize: 17,
          fontWeight: 600
        }}>
            {nameTheme}
        </Text>
    </View>
  )
}
