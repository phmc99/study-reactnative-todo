import { StyleSheet } from "react-native";

export const todoStatusStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  statusContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center"
  },
  createStatusText: {
    color: '#4ea8de',
    fontSize: 14,
    fontWeight: "bold",
  },
  completedStatusText: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: "bold"
  },
  quantity: {
    paddingHorizontal: 2,
    width: 25,
    height: 20,
    borderRadius: "35%",
    backgroundColor: "#333333"
  },
  quantityText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  }
})