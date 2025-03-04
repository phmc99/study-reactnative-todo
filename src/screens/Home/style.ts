import { StyleSheet } from 'react-native';


export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
    width: "100%"
  },
  input: {
     width: "80%",
     height: 56,
     backgroundColor: "#ccc",
     padding: 16,
     fontSize: 16,
     borderRadius: 10
  },
  createButton: {
    width: 56,
    height: 56,
    backgroundColor: "#4ea8de",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold"
  }
});
