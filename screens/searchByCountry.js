import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { Icon } from 'react-native-elements'

const SearchByCountry = ( { navigation} ) => {
  return (
    <View style={styles.container}>
      <Text>SearchByCountry</Text>
      <Icon
        name='search'
        style={styles.icon}
        size={60}
        onPress={() => navigation.navigate("topCities")}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: "center",
    }
})

export default SearchByCountry;
