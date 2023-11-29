import { StyleSheet } from "react-native";

export const globalThemes = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff", si dejamos este background, no funciona correctamente el modo dark/light, a los colores hay que tomarlos del ThemeProvider
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
  },
  errorText: {
    fontSize: 15,
    fontWeight: 200,
    alignSelf: "center",
  },
  defaultInputText: {
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    marginHorizontal: 15,
    marginVertical: 15,
    paddingHorizontal: 12,
  },
  defaultBtn: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: "center",
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
  },
  defaulTextBtn: {
    fontSize: 15,
    fontWeight: "500",
  },
  footer: {
    fontSize: 13,
    position: "absolute",
    alignSelf: "center",
    marginVertical: 20,
    bottom: -40,
  },
  footer: {
    fontSize: 13,
    color: "rgba(255,255,255, 0.3)",
    alignSelf: "center",
    marginVertical: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  // defaultBtn: {
  //     backgroundColor:  '#f2058b',
  //     fontSize: 16,
  //     paddingVertical: 10,
  //     paddingHorizontal: 30,
  //     alignSelf: 'center',
  //     borderRadius: 20,
  //     marginVertical: 30,
  // // },

  // defaulTextBtn: {
  //     fontSize: 15,
  //     color: '#fff',
  //     fontWeight: '500'
  // },

  // defaultBtnOutline: {
  //     fontSize: 16,
  //     paddingVertical: 10,
  //     paddingHorizontal: 30,
  //     alignSelf: 'center',
  //     borderRadius: 20,
  //     marginVertical: 20,
  //     borderColor:'#f2058b',
  //     borderWidth: 2,
  // },

  // defaultBtnQuantity: {
  //     fontSize: 16,
  //     paddingVertical: 10,
  //     paddingHorizontal: 30,
  //     alignSelf: 'center',
  //     borderRadius: 10,
  //     marginVertical: 20,
  //     borderColor:'#f2058b',
  //     borderWidth: 2,
  // },

  // defaultInputText:  {
  //     borderWidth:2,
  //     borderColor: '#f2058b',
  //     borderRadius: 40,
  //     paddingVertical: 5,
  //     marginHorizontal: 15,
  //     marginVertical: 15,
  //     paddingHorizontal: 12,
  //     color: '#fff'
  // },

  // defaultDividrTitile: {
  //     flex:1,
  //     backgroundColor: 'rgba(255,255,255, 0.1)',
  //     justifyContent: 'center',
  //     alignItems:'center',
  //     borderRadius:5,
  //     marginBottom: 20
  // },

  // defaultDivideTitleText: {
  //     color: 'rgba(255,255,255, 0.6)',
  //     fontSize: 18,
  //     fontWeight: '600'
  // }
});
