import React from "react";
import { View, Text, StyleSheet, } from "react-native";

const Population = () => {
  return (
    <View style={styles.container}>
      <Text>Population</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: "center",
    }
})

export default Population;
