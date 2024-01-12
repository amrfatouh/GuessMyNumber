import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Card from "../components/Card";
import ColoredText from "../components/ColoredText";
import numbers from "../constants/numbers";

export default function NumberInputScreen({ goToGuessingScreen }) {
  const [num, setNum] = useState("");
  const { height } = useWindowDimensions();

  function handleTextChange(value) {
    const n = parseInt(value);
    if (isNaN(n) && value != "") return;
    setNum(value);
  }

  function handleConfirm() {
    const n = parseInt(num);
    if (n < numbers.min || n > numbers.max) {
      Alert.alert(
        "Invalid Number",
        `Enter a number from ${numbers.min} to ${numbers.max} (inclusive).`,
        [{ text: "OK" }]
      );
      return;
    }
    goToGuessingScreen(num);
  }

  return (
    <View style={styles.container}>
      <View style={styles.centerer}>
        <Text style={styles.heading}>Guess My Number</Text>
      </View>
      <View
        style={[styles.centerer, { flex: 2, justifyContent: "flex-start" }]}
      >
        <Card>
          <ColoredText style={styles.text}>
            Enter a number from {numbers.min} to {numbers.max}.
          </ColoredText>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={2}
            value={num}
            onChangeText={handleTextChange}
            selectionColor={colors.red}
          />
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={[styles.buttonStrecher, { marginRight: 10 }]}>
              <PrimaryButton onPress={() => setNum("")}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonStrecher}>
              <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  centerer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.yellow,
  },
  textInput: {
    borderWidth: 3,
    borderColor: colors.red,
    fontSize: 32,
    padding: 8,
    width: "100%",
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.yellow,
    marginBottom: 10,
  },
  buttonStrecher: { flex: 1, alignItems: "stretch" },
  text: {
    marginBottom: 10,
  },
});
