import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import ColoredText from "../components/ColoredText";
import colors from "../constants/colors";
import React, { useEffect, useRef, useState } from "react";
import GuessTile from "../components/GuessTile";
import numbers from "../constants/numbers";

export default function GuessingScreen({ chosenNumber, goToGameOverScreen }) {
  const [guesses, setGuesses] = useState([]);
  const [min, setMin] = useState(numbers.min);
  const [max, setMax] = useState(numbers.max);
  const [lastGuess, setLastGuess] = useState();

  const { width, height } = useWindowDimensions();
  const flexDirection = height > width ? "column" : "row";

  const listRef = useRef();

  // IMPORTANT: this use effect is initiated once when the component first appears
  useEffect(() => guess(), [min, max]);
  useEffect(() => {
    if (lastGuess == chosenNumber) {
      goToGameOverScreen(chosenNumber, guesses.length);
    }
  }, [lastGuess]);
  useEffect(() => listRef.current.scrollToEnd({ animated: true }), [guesses]);

  function guess() {
    let n = min + Math.ceil(Math.random() * (max - min));
    setGuesses([...guesses, n]);
    setLastGuess(n);
  }

  function indicateMoreThan() {
    if (chosenNumber < lastGuess) {
      Alert.alert(
        "Don't Lie",
        "The number you chose is less than the last guessed number.",
        [{ text: "OK" }],
        { cancelable: true }
      );
      return;
    }
    setMin(lastGuess + 1);
  }

  function indicateLessThan() {
    if (chosenNumber > lastGuess) {
      Alert.alert(
        "Don't Lie",
        "The number you chose is greater than the last guessed number.",
        [{ text: "OK" }],
        { cancelable: true }
      );
      return;
    }
    setMax(lastGuess - 1);
  }

  return (
    <View style={[styles.container, { flexDirection: flexDirection }]}>
      <View style={styles.rightScreenHalf}>
        <View style={styles.centerer}>
          <Text style={styles.heading}>Opponent's Guess</Text>
        </View>
        <View style={styles.centerer}>
          <Text style={styles.guessedNumber}>{lastGuess}</Text>
        </View>
        <View style={[styles.centerer, { flex: 3 }]}>
          <Card>
            <ColoredText
              style={{ marginBottom: 10, width: null, fontSize: 20 }}
            >
              Lower or higher?
            </ColoredText>
            <View style={styles.buttonsContainer}>
              <View style={[styles.buttonStrecher, { marginRight: 10 }]}>
                <PrimaryButton onPress={indicateLessThan}>lower</PrimaryButton>
              </View>
              <View style={styles.buttonStrecher}>
                <PrimaryButton onPress={indicateMoreThan}>higher</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guesses}
          renderItem={(guessData) => (
            <GuessTile index={guessData.index} guess={guessData.item} />
          )}
          ref={listRef}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  rightScreenHalf: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-start",
    marginRight: 20,
    alignItems: "center",
  },
  centerer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.yellow,
  },
  guessedNumber: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.yellow,
    borderWidth: 3,
    borderColor: colors.yellow,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingLeft: 16,
  },
  buttonsContainer: { flexDirection: "row" },
  buttonStrecher: { flex: 1 },
  listContainer: {
    width: "100%",
    flex: 1,
    marginTop: 10,
  },
});
