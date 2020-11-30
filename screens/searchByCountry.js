import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from "react-native";
import { Icon } from 'react-native-elements'
import { TextInput, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from '../assets/background.png';

const SearchByCountry = ( { navigation} ) => {

    const [value, onChangeText] = React.useState('');
    const [load, setLoad] = React.useState(false);
    const [noResult, showNoResultMsg] = React.useState(false);

    function fetchApi(arg) {

      const abortController = new AbortController()
      const signal = abortController.signal
      
      setTimeout(() => abortController.abort(), 2000);
        fetch('http://api.geonames.org/searchJSON?country=' + arg + '&featureClass=P&orderby=population&maxRows=3&username=weknowit', {signal: signal })
          .then((response) => response.json())
          .then((response) => {
            setLoad(false)
            // Handle illegal cases, to allow searches limited to letter only words
            if (response.totalResultsCount > 0 && arg != ''  && arg.match(/^\p{Lu}\p{L}*(?:[\s-]\p{Lu}\p{L}*)*$/)) {
                navigation.navigate("topCities", {
                  data: response.geonames
                });
            } else {
                // Show message if no results are founds or illegal characters were used
                showNoResultMsg(true);
              }
          })
          .catch((error) => console.error(error))
      }

      // Fetches the search result's country code
      // to then use fetchAPI in order to get that country's biggest cities
      function fetchCountryCode(arg) {
        
        const abortController = new AbortController()
        const signal = abortController.signal
        
        setTimeout(() => abortController.abort(), 2000);
        fetch('http://api.geonames.org/searchJSON?name=' + arg + '&featureClass=A&orderby=population&maxRows=1&username=weknowit', {signal: signal })
        .then((response) => response.json())
          .then((response) => {
            setLoad(false)
            // Handle illegal cases, to allow searches limited to letter only words
            if (response.totalResultsCount > 0 && arg != ''  && arg.match(/^\p{Lu}\p{L}*(?:[\s-]\p{Lu}\p{L}*)*$/)) {
                fetchApi(response.geonames[0].countryCode)
            } else {
                // Show message if no results are founds or illegal characters were used
                showNoResultMsg(true);
                setTimeout(() => showNoResultMsg(false), 2000);
              }
          })
          .catch((error) => console.error(error))
      }
      // pressFunction to activate loading ActivityIndicator & call the asyncronous fetch function
      // Here we need to initially fetch the Country code first before fetching the actual cities after
      const pressFunction = async (arg) => {
        setLoad(!load)
        await fetchCountryCode(arg)
      }

  return (
    <View style={styles.container}>

      <ImageBackground source={Background} style={styles.image} fadeDuration={0}>
      <View style={styles.backIconContainer}>
      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("home")}>
      <View style={styles.backIcon}>
      <Icon
        name='home'
        size={30}
        color='black'
      />
      <Text style={styles.backIconText}>Home</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={styles.content}>
      <View style={styles.innerContainer}>

      <Text style={styles.title}>Search With Country</Text>
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
        onPress={() => pressFunction(value)}
        />
        </View>
        {noResult && <Text>No search results found</Text>}
        {load && <ActivityIndicator size='large' color="#00ff00"/>}
        </View>
        </View>  
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    backIconContainer: {
        width: 120,
        height: 50,
        marginTop: 60,
        marginLeft: 30,
        borderColor: '#AAAAAA',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        opacity: 0.75,
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchable: {
        borderRadius: 20,
    },
    backIcon: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backIconText: {
      fontSize: 20, 
      color: 'black'
    },
    container: {
    },
    icon: {
        marginTop: 20,
    },
    title: {
      marginTop: 15,
      fontSize: 20,
    },
    innerContainer: {
      width: 300,
      height: 250,
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 10,
      borderColor: '#AAAAAA',
      borderWidth: 1,
      borderRadius: 20,
      opacity: 0.75,

      backgroundColor: '#FFFFFF',
      
      marginTop: 100,
    },
    content: {
      alignItems: 'center'
    },
    inputContainer: {
        marginTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'teal',
      height: 40,
      width: 250,
      borderRadius: 25,
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
})

export default SearchByCountry;
