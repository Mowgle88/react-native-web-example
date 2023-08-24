import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const DetailsScreen = () => {
  const { height } = useWindowDimensions();
  const [number, setNumber] = useState(0);

  function handlePress() {
    setNumber(Math.floor(Math.random() * 10000) % 100);
  }

  return (
    <View style={[styles.container, { height }, StyleSheet.absoluteFill]}>
      <Text>Random number: {number}</Text>
      <View style={styles.br} />
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.btn,
        ]}
        onPress={handlePress}
      >
        <Text style={styles.btnText}>Generate a number</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  br: {
    height: 12,
  },
  btn: {
    backgroundColor: "#222",
    padding: 10,
  },
  btnText: {
    color: "#fff",
  },
});

export default DetailsScreen;
