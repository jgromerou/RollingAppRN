import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { globalThemes } from '../../themes/globalThemes';
import { ThemeContext } from '../../contexts/ThemeContext';
import { GoBack } from './GoBack';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { Button } from 'react-native';
import { Image } from 'react-native';

export const ConfirmPay = ({navigation}) => {
    //console.log(props) colors
    const { navigate } =  useNavigation();
    const {
      state: { colors },
    } = useContext(ThemeContext);
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleRadioButtonPress = (value) => {
      setSelectedValue(value);
      // You can add your custom logic here based on the selected value
      switch (value) {
        case 'option1':
          // Execute actions for Option 1
          console.log('Option 1 selected');
          break;
        case 'option2':
          // Execute actions for Option 2
          console.log('Option 2 selected');
          break;
        case 'option3':
          // Execute actions for Option 3
          console.log('Option 3 selected');
          break;
        default:
          break;
      }
    };
  
    
  return (
    <View style={{ 
            //globalThemes.container
            flex: 1,
            backgroundColor: colors.primary,
            padding: 10,
        }}>

        <GoBack navigation={navigation}/>

        <View>
            <Text style={{color: 'white'}}>
                Confirm Pay
            </Text>
        </View>
        <View
            style={{
                flexDirection: "col",
                flex: 1,
                justifyContent: 'space-evenly',
                marginTop: 10,
                marginBottom: 5,
                //backgroundColor:'white',
                alignItems: 'center'

            }}
        >


        <View style={{ justifyContent:'center',alignContent:'center', flex:1}}>
            {/* <Text>Choose an option:</Text> */}
            <RadioButton.Group
                onValueChange={(value) => handleRadioButtonPress(value)}
                value={selectedValue}
            >
                <View style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    width:300,
                    height: 160,
                    borderRadius: 15,
                    backgroundColor: '#ADD8E6',
                    marginBottom: 5
                    // borderWidth:2,
                    // borderColor: 'red' 
                    }}>
                <RadioButton value="option1" color="blue" />
                {/* <Text>Option 1</Text> */}
                <TouchableOpacity
                  onPress={() => handleRadioButtonPress('option1')}
                 >
                  <Image 
                      source={require('../../assets/thoto/banners/cash03.png')}
                      style={{
                        width:140,
                        height: 150,
                        marginLeft: 45,
                        //verticalAlign: 'center',
                        objectFit: 'cover',
                      }} 
                  />
                </TouchableOpacity>
                </View>
                <Text style={{
                  color: 'black',
                  flex: 1,
                  position: 'absolute',
                  width: '100%',
                  top: 130,
                  left:30,
                  alignItems:'flex-end'
                }}>
                  Cash
                </Text>
                <View style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center',
                  width:300,
                  height: 160,
                  borderRadius: 15,
                  backgroundColor: '#ababab',
                  marginBottom: 5
                  }}>
                <RadioButton value="option2" color="black" name="RadioButtoncard" />
                {/* <Text>Option 2</Text> */}
                  <TouchableOpacity
                    onPress={() => handleRadioButtonPress('option2')}
                  >
                  <Image 
                      source={require('../../assets/thoto/banners/card.png')}
                      style={{
                          width:200,
                          height: 150,
                          borderRadius: 5,
                          marginLeft: 30,
                          objectFit: 'cover',
                      }} 
                  />
                  </TouchableOpacity>
                </View>
                <Text style={{
                  color: 'black',
                  flex: 1,
                  position: 'absolute',
                  width: '100%',
                  top: 298,
                  left:30,
                  alignItems:'flex-end'
                }}>
                  Credit Card
                </Text>
                <View style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center',
                  width:300,
                  height: 160,
                  borderRadius: 15,
                  backgroundColor: 'white',
                  marginBottom: 10
                  }}>
                <RadioButton value="option3" color="skyblue" />
                {/* <Text>Option 3</Text> */}
                <TouchableOpacity
                  onPress={() => handleRadioButtonPress('option3')}
                >
                  <Image 
                      source={require('../../assets/thoto/banners/Mercado_Pago.png')}
                      style={{
                          width:250,
                          height: 150,
                          borderRadius: 5
                      }} 
                  />
                </TouchableOpacity>
                </View>
            </RadioButton.Group>
            {/* <Text>Selected Value: {selectedValue}</Text> */}
            {/* <Button
                title="Perform Action"
                onPress={() => {
                // You can perform an action based on the selected value here as well
                switch (selectedValue) {
                    case 'option1':
                    // Execute actions for Option 1 when the button is pressed
                    console.log('Performing action for Option 1');
                    break;
                    case 'option2':
                    // Execute actions for Option 2 when the button is pressed
                    console.log('Performing action for Option 2');
                    break;
                    case 'option3':
                    // Execute actions for Option 3 when the button is pressed
                    console.log('Performing action for Option 3');
                    break;
                    default:
                    break;
                }
                }}
            /> */}
        </View>












        <TouchableOpacity
            style={{
                backgroundColor: "#f2058b",
                alignItems: "center",
                fontSize: "17",
                fontWeight: "600",
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 5,
                alignSelf:  'center'
            }}
            //onPress={() => navigate('ConfirmPay')}
            >
                <Text style={globalThemes.defaulTextBtn}>PAY</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}
