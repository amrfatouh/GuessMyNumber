import { ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({
  chosenNumber,
  guessesNumber,
  startNewGame,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../assets/game_over.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{ opacity: 0.4 }}
        >
          <Text style={styles.heading}>Game Over</Text>
        </ImageBackground>
      </View>
      <View style={styles.secondHalfContainer}>
        <View style={styles.senteceCenterer}>
          <View style={styles.sentenceContainer}>
            <Text style={styles.sentence}>It took </Text>
            <Text style={styles.highligtedNumber}>{guessesNumber}</Text>
            <Text style={styles.sentence}>guesses to reach the number </Text>
            <Text style={styles.highligtedNumber}>{chosenNumber}</Text>
            <Text style={styles.sentence}>you chose.</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={startNewGame}>Start a New Game</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 1000,
    overflow: "hidden",
    flex: 1,
    borderWidth: 4,
    borderColor: colors.blue,
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    color: colors.blue,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  secondHalfContainer: {
    flex: 1,
  },
  senteceCenterer: {
    flex: 1,
    justifyContent: "center",
  },
  sentenceContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
  sentence: {
    fontSize: 20,
    textAlign: "center",
    color: colors.yellow,
    fontWeight: "bold",
  },
  highligtedNumber: {
    backgroundColor: colors.blue,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 1000,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.yellow,
    marginRight: 4,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
