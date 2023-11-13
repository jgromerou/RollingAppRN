import { StyleSheet } from "react-native";

export const globalThemes = StyleSheet.create({
  container: {
    flex: 1,
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
    marginVertical: 30,
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
    bottom: -20,
  },
});
