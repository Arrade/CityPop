import React from "react";
import { View, Text, StyleSheet, ImageBackground, } from "react-native";
import BlueButton from "../components/BlueButton";

const TopCities = ( {navigation, route} ) => {

    const { data } = route.params;

    const image = { uri: "https://wallpapercave.com/wp/wp5594572.png" };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} fadeDuration={0}>
      <View style={styles.content}>
      <Text onPress={() => navigation.navigate("population")}>TopCities</Text>
      {data.map((test, index) => <View key={test.geonameId} index={index} style={styles.button}><BlueButton onPress={() => navigation.navigate("population", {data: data[index]})} key={test.geonameId} style={styles.button}>{test.adminName1}</BlueButton></View>)}
      </View>
      </ImageBackground>
    </View>
  );
};

function nextIndex(index) {
    return index
}

const styles = StyleSheet.create({
    container: {
        //marginTop: 200,
        //alignItems: "center",
    },
    image: {
      width: '100%',
      height: '100%',
      //alignItems: "center",
    },
    content: {
      marginTop: 150,
      alignItems: 'center'
    },
    button: {
        marginTop:50,
    },
})

export default TopCities;
