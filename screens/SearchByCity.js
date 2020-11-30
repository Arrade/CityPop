import React from "react";
import { View, Text, StyleSheet, Input, ActivityIndicator, ImageBackground} from "react-native";
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchByCity = ( {navigation} ) => {

  const [value, onChangeText] = React.useState('');
  const [isLoading, setLoading] = React.useState(true);
  const [load, setLoad] = React.useState(false);
  const [noResult, showNoResultMsg] = React.useState(false);

  const image = { uri: "https://wallpapercave.com/wp/wp5594572.png" };
  
  //Fetches API response based on on search term arg
  function fetchApi(arg) {

    const abortController = new AbortController()
    const signal = abortController.signal

    //fetch('https://secure.geonames.org/searchJSON?q=' + arg + '&maxRows=1&username=weknowit')
    setTimeout(() => abortController.abort(), 2000);
    fetch('http://api.geonames.org/searchJSON?name=' + arg + '&featureClass=P&maxRows=1&username=weknowit', {signal: signal })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        //console.log(response.geonames);
        setLoad(false)
        // Handle illegal cases
        if (response.totalResultsCount > 0 && arg != '' && arg.match(/(^([/ ]*|[A-Za-z])+[/ ]*)+/)) {
        navigation.navigate("population", {
          data: response.geonames[0]
        });
        } else {
          showNoResultMsg(true);
          setTimeout(() => showNoResultMsg(false), 2000);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }


  const pressFunction = async (arg) => {
    setLoad(!load)
    await fetchApi(arg)
  }

  return (
    <View style={styles.container}>
      
      <ImageBackground source={image} style={styles.image} fadeDuration={0}>
      <View style={styles.iconBack}>
      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("home")}>
      <View style={styles.iconBack2}>
      <Icon
        name='home'
        size={30}
        color='black'
        //onPress={() => navigation.navigate("home")}
      />
      <Text style={{fontSize: 20, color: 'black'}}>Home</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.content}>

      <View style={styles.innerContainer}>

      <Text style={styles.title}>Search With City</Text>

      <View style={styles.inputContainer2}>
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
        //onPress={() => fetchApi(value)}
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
    iconBack: {
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
    iconBack2: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        //marginTop: 200,
        //alignItems: "center",
    },
    icon: {
        /*
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1,
        borderColor: 'teal',
        borderRadius: 50,
        */
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
    inputContainer2: {
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
      //alignItems: "center",
    },
})

export default SearchByCity;
