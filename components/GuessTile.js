import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

export default function GuessTile({ index, guess }) {
  return (
    <View style={styles.tile}>
      <Text style={styles.text}>#{index + 1}</Text>
      <Text style={[styles.text, { flex: 1 }]}>Guessed Value: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.blue,
    borderWidth: 3,
    borderColor: colors.red,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    borderRadius: 1000,
  },
  text: {
    color: colors.yellow,
    fontSize: 20,
    textAlign: "center",
  },
});
