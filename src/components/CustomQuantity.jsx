import { Pressable, Text } from "react-native"
import { View } from "react-native"
import {Entypo} from "react-native-vector-icons";

export const CustomQuantity = ({quantity, addOne, removeOne}) => {
  
    return (
    <View style={{
        flexDirection: "row",
        marginStart: 5
        }}
    >

        <Pressable  
            style={{ alignItems: "center", borderColor: "#C1C0C0" }}
            onPress={ removeOne }>
                <Entypo name="squared-minus" size={35} color="#76B0F1" />
        </Pressable>

        <View  style={{
            marginHorizontal: 6
        }}
        >
            <Text  style={{
                color: "#0c59b0",
                fontSize: 22,
                fontWeight: 500,
                }} >
                    {quantity}
                </Text>
        </View>
        
        <Pressable  style={{ alignItems: "center", borderColor: "#C1C0C0" }}
            onPress={ addOne }>
                 <Entypo name="squared-plus" size={35} color="#76B0F1" />
        </Pressable>
    </View>
  )
}
