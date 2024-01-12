import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    padding: 20,
    backgroundColor: colors.blue,
    borderRadius: 10,
  },
});
