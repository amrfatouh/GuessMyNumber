import { StyleSheet, Text } from "react-native";

export default function ColoredText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    width: "100%",
    fontSize: 20,
    color: colors.yellow,
    textAlign: "center",
  },
});
