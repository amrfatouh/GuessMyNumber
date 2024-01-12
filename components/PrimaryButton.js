import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

export default function PrimaryButton({
  children,
  backgroundColor,
  onPress,
  color,
}) {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 1000,
      overflow: "hidden",
    },
    body: {
      backgroundColor: backgroundColor || colors.red,
      paddingVertical: 6,
      paddingHorizontal: 16,
    },
    text: {
      color: color || colors.yellow,
      fontSize: 20,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ foreground: true, color: colors.blue }}
        onPress={onPress}
      >
        <View style={styles.body}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
