import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./constants/colors";
import NumberInputScreen from "./screens/NumberInputScreen";
import { useState } from "react";
import GuessingScreen from "./screens/GuessingScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [screen, setScreen] = useState(
    <NumberInputScreen goToGuessingScreen={goToGuessingScreen} />
  );

  function goToGuessingScreen(n) {
    setScreen(
      <GuessingScreen
        chosenNumber={n}
        goToGameOverScreen={goToGameOverScreen}
      />
    );
  }

  function goToGameOverScreen(chosenNumber, guessesNumber) {
    setScreen(
      <GameOverScreen
        chosenNumber={chosenNumber}
        guessesNumber={guessesNumber}
        startNewGame={startNewGame}
      />
    );
  }

  function startNewGame() {
    setScreen(<NumberInputScreen goToGuessingScreen={goToGuessingScreen} />);
  }

  return (
    <LinearGradient
      colors={[colors.red, colors.blue]}
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0.3 }}
      end={{ x: 0.5, y: 1.2 }}
    >
      <ImageBackground
        source={require("./assets/random.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.1 }}
      >
        <View style={styles.container}>
          <StatusBar
            style="auto"
            translucent={false}
            backgroundColor={colors.red}
          />
          {screen}
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
