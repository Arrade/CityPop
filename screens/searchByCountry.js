import React from "react";
import { View, Text, StyleSheet, } from "react-native";

const SearchByCountry = () => {
  return (
    <View style={styles.container}>
      <Text>SearchByCountry</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: "center",
    }
})

export default SearchByCountry;
