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
  errorText: {
    fontSize: 15,
    fontWeight: 200,
    alignSelf: "center",
    marginTop: -4,
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
});
