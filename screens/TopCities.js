import React from "react";
import { View, Text, StyleSheet, } from "react-native";

const TopCities = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("population")}>TopCities</Text>
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
