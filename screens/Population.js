import React, { useEffect } from "react";
import { View, Text, StyleSheet, } from "react-native";

const Population = ( {route, navigation} ) => {
    
    const { data } = route.params;

  return (
      
    <View style={styles.container}>

  <Text style={styles.title} onPress={() => navigation.navigate("topCities")}>Population of {data.toponymName}</Text>

        <View style={styles.populationContainer}>
            {/*
            {data.map(test => <Text key={test.geonameId} style={styles.population}>{test.population}</Text>)}
                */}
                <Text style={styles.population}>{data.population}</Text>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
    },
    population: {
        fontSize: 30,
    },
    populationContainer: {
        borderWidth: 1,
        width: 200,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,

    },
})

export default Population;
