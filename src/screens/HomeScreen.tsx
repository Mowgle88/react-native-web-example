import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootScreenNavigationProps } from "../navigation/types";

const HomeScreen = () => {
  const navigation = useNavigation<RootScreenNavigationProps>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details");
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
