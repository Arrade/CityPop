import React from "react";
import { ImageBackground, View, Text, StyleSheet, Button, Image } from "react-native";
import { color } from "react-native-reanimated";
import BlueButton from "../components/BlueButton";

const Homepage = ( { navigation } ) => {

const image = { uri: "https://wallpapercave.com/wp/wp5594572.png" };

  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
        <View style={styles.innerContainer}>
      <Text style={styles.title}>CityPop</Text>
      <Text style={styles.introText}>Welcome to CityPop!{'\n'}The best way to lookup population count{'\n'}of all your favourite cities across the world!</Text>
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
        marginTop: 100,
    },
    button: {
        marginTop:50,
    },
    title: {
      fontSize: 50,
      fontFamily: '',
      color: '#FFFFFF',
    },
    introText: {
      fontSize: 17,
      color: '#FFFFFF',
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: "center",
      },
})

export default Homepage;
