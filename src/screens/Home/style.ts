import { StyleSheet } from 'react-native';


export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    marginVertical: 20
  },
  input: {
     width: "80%",
     height: 56,
     backgroundColor: "#262626",
     color: "white",
     padding: 16,
     fontSize: 16,
     borderRadius: 5
  },
  createButton: {
    width: 56,
    height: 56,
    backgroundColor: "#4ea8de",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold"
  },
  todoList: {
    width: "100%",
    paddingHorizontal: 10,
    maxHeight: 360,
  },
  emptyTodosText: {
    fontSize: 24,
    color: "#747474",
    fontWeight: "bold",
    marginHorizontal: "auto"
  },
});
