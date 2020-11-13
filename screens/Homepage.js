import React from "react";
import { View, Text, StyleSheet,  } from "react-native";


const Homepage = () => {

  return (
    <View style={styles.container}>
      <Text>CityPop</Text>
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
