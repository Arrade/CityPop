import React from "react";
import { ImageBackground, View, Text, StyleSheet, Button, Image } from "react-native";
import BlueButton from "../components/BlueButton";

const Homepage = ( { navigation } ) => {

const image = { uri: "https://wallpapercave.com/wp/wp5594572.png" };

  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
        <View style={styles.innerContainer}>
      <Text>CityPop</Text>
      <View style={styles.button}>    
        <BlueButton onPress={() => navigation.navigate("searchByCity", {image: image})}>SEARCH BY CITY</BlueButton>
        </View>
        <View style={styles.button}> 
        <BlueButton onPress={() => navigation.navigate("searchByCountry")}>SEARCH BY COUNTRY</BlueButton>
      </View>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        //marginTop: 200,
        //alignItems: "center",
    },
    innerContainer: {
        marginTop: 200,
    },
    button: {
        marginTop:50,
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: "center",
      },
})

export default Homepage;
