import React, { useEffect } from "react";
import { View, Text, StyleSheet, } from "react-native";

const Population = ( {route, navigation} ) => {
    
    const { data } = route.params;

  return (
      
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("topCities")}>Population</Text>
      {data.map(test => <Text key={test.geonameId}>{test.population}</Text>)}
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
