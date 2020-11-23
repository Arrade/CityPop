import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground} from "react-native";

const Population = ( {route, navigation} ) => {
    
    const { data } = route.params;

    const image = { uri: "https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/preview/08.jpg" };

  return (
      
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
        <View style={styles.innerContainer}>

        <Text style={styles.title} onPress={() => navigation.navigate("topCities")}>Population of {data.toponymName}</Text>

        <View style={styles.populationContainer}>
            {/*
            {data.map(test => <Text key={test.geonameId} style={styles.population}>{test.population}</Text>)}
                */}
            <Text style={styles.population}>{data.population}</Text>
        </View>
        </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        //marginTop: 200,
        alignItems: "center",
    },
    innerContainer: {
        marginTop: 300,
        alignItems: 'center',
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
    image: {
        width: '100%',
        height: '100%',
        alignItems: "center",
      },
})

export default Population;
