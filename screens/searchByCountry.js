import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { Icon } from 'react-native-elements'
import { TextInput, Image } from 'react-native';
import { useEffect, useState } from 'react';

const SearchByCountry = ( { navigation} ) => {

    const [value, onChangeText] = React.useState('');
    const [isLoading, setLoading] = useState(true);

    function fetchApi(arg) {
        //fetch('https://secure.geonames.org/searchJSON?q=' + arg + '&maxRows=3&username=weknowit')
        //fetch('http://api.geonames.org/searchJSON?name=' + arg + '&featureClass=A&orderby=population&maxRows=1&username=weknowit')
        //fetch('http://api.geonames.org/searchJSON?country=' + countryCode + '&featureClass=P&orderby=population&maxRows=' + maxResults + '&username=weknowit')
        fetch('https://secure.geonames.org/searchJSON?q=' + arg + '&featureClass=P&orderby=population&maxRows=3&username=weknowit')
          .then((response) => response.json())
          .then((response) => {
            //console.log(response);
            console.log(response.geonames);
            //return setData(json.geonames); // Outdated, change this
            navigation.navigate("topCities", {
              data: response.geonames
            });
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }

  return (
    <View style={styles.container}>
      <Text>SearchByCountry</Text>
      <View style={styles.inputContainer}>
      <TextInput 
        clearTextOnFocus={true}
        clearButtonMode={'while-editing'}
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      </View>  

      <View style={styles.icon}>
      <Icon
        name='search'
        size={60}
        onPress={() => fetchApi(value)}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: "center",
    },
    inputContainer: {
        marginTop: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: 'teal',
        height: 40,
        width: 300,
        borderRadius: 25,
        textAlign: 'center',
      },
    icon: {
        marginTop: 50,
    },
})

export default SearchByCountry;
