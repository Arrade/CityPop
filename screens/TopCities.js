import React from "react";
import { View, Text, StyleSheet, } from "react-native";

const TopCities = () => {
  return (
    <View style={styles.container}>
      <Text>TopCities</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: "center",
    }
})

export default TopCities;
