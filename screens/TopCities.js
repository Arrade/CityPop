import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import BlueButton from "../components/BlueButton";

const TopCities = ( {navigation, route} ) => {

    const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("population")}>TopCities</Text>
      {data.map((test, index) => <View key={test.geonameId} index={index} style={styles.button}><BlueButton onPress={() => navigation.navigate("population", {data: data[index]})} key={test.geonameId} style={styles.button}>{test.adminName1}</BlueButton></View>)}
    </View>
  );
};

function nextIndex(index) {
    return index
}

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: "center",
    },
    button: {
        marginTop:50,
    },
})

export default TopCities;
