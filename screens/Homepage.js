import React from "react";
import { ImageBackground, View, Text, StyleSheet, } from "react-native";
import BlueButton from "../components/BlueButton";

import Background from '../assets/background.png';

const Homepage = ( { navigation } ) => {

  return (
    <View style={styles.container}>
    <ImageBackground source={Background} style={styles.image}>
        <View style={styles.innerContainer}>
      <Text style={styles.title}>CityPop</Text>
      <Text style={styles.introText}>Welcome to CityPop!{'\n'}The best way to lookup population count{'\n'}of all your favourite cities across the world!</Text>
      <View style={styles.button}>    
        <BlueButton onPress={() => navigation.navigate("searchByCity")}>SEARCH BY CITY</BlueButton>
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
      
    },
    innerContainer: {
        marginTop: 100,
    },
    button: {
        marginTop:50,
    },
    title: {
      fontSize: 50,
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
