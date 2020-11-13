import React from "react";
import { View, Text, StyleSheet, Input } from "react-native";
import { Icon } from 'react-native-elements'



const SearchByCity = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <Text>SearchByCity</Text>
      <Icon
        name='search'
        style={styles.icon}
        size={60}
        onPress={() => navigation.navigate("population")}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: "center",
    },

    icon: {
        marginTop: 20,
    }
})

export default SearchByCity;
