import React from "react";
import { View, Text, StyleSheet, Button, } from "react-native";
import BlueButton from "../components/BlueButton";

const Homepage = ( { navigation } ) => {

  return (
    <View style={styles.container}>
      <Text>CityPop</Text>
      <View style={styles.button}>    
        <BlueButton onPress={() => navigation.navigate("searchByCity")}>FORTSÄTT</BlueButton>
        </View>
        <View style={styles.button}> 
        <BlueButton onPress={() => navigation.navigate("searchByCity")}>FORTSÄTT</BlueButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: "center",
    },
    button: {
        marginTop:50,
    },
})

export default Homepage;
