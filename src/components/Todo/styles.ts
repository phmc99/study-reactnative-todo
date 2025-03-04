import { StyleSheet } from "react-native";

export const todoStyles = StyleSheet.create({
  container: {
    minHeight: 56,
    backgroundColor: '#262626',
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#4ea8de',
    borderRadius: "100%",
    marginHorizontal: 10,
  },
  text: {
    color: "white",
    flex: 1,
    fontSize: 14,
  },
  deleteButton: {
    width: 56,
    height: 56,
    backgroundColor: "#e25858",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold"
  }
})