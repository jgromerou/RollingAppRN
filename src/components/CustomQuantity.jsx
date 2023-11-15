import { useContext } from "react";
import { Pressable, Text } from "react-native"
import { View } from "react-native"
import {Entypo} from "react-native-vector-icons";
import { ThemeContext } from "../contexts/ThemeContext";

export const CustomQuantity = ({quantity, addOne, removeOne}) => {
    const {state} = useContext(ThemeContext)
    return (
    <View style={{
        flexDirection: "row",
        marginStart: 5
        }}
    >

        <Pressable  
            style={{ alignItems: "center", borderColor: state.colors.notification }}
            onPress={ removeOne }>
                <Entypo name="squared-minus" size={35} color={state.colors.background} />
        </Pressable>

        <View  style={{
            marginHorizontal: 5, paddingTop: 3
        }}
        >
            <Text  style={{
                color: state.colors.background,
                fontSize: 23,
                fontWeight: 800,
                }} >
                    {quantity}
                </Text>
        </View>
        
        <Pressable  style={{ alignItems: "center", borderColor: state.colors.notification, }}
            onPress={ addOne }>
                 <Entypo name="squared-plus" size={35} color={state.colors.background} />
        </Pressable>
    </View>
  )
}
