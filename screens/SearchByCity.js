import React from "react";
import { View, Text, StyleSheet, Input, ActivityIndicator, FlatList, ImageBackground} from "react-native";
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native';
import { useEffect, useState } from 'react';

const SearchByCity = ( {navigation} ) => {

  const [value, onChangeText] = React.useState('');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pop, setPop] = React.useState('');
  //console.log(data)

  const image = { uri: "https://wallpapercave.com/wp/wp5594572.png" };
  
  function fetchApi(arg) {
    fetch('https://secure.geonames.org/searchJSON?q=' + arg + '&maxRows=1&username=weknowit')
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        //console.log(response.geonames);
        //return setData(json.geonames); // Outdated, change this
        navigation.navigate("population", {
          data: response.geonames[0]
        });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }


      // Outdated, keep this until async awaits have been added in fetchApi
  /*
  const fun2 = async (arg) => {
    try {
      let response = await fetch(
        'https://secure.geonames.org/searchJSON?q=' + arg + '&maxRows=1&username=weknowit'
      );
      let json = await response.json();
      return await setData(json.geonames);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
*/

  const pressFunction = async (arg) => {
    await fetchApi(arg)
  }

  return (
    <View style={styles.container}>
      
      <ImageBackground source={image} style={styles.image} fadeDuration={3}>
        <View style={styles.innerContainer}>
      <Text>SearchByCity</Text>

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
        //onPress={() => pressFunction(value)} // Outdated, remove
        onPress={() => fetchApi(value)}
        />
        </View>
      {data.map(test => <Text key={test.geonameId}>{test.population}</Text>)}
      <Text>{value}</Text>
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

    icon: {
        marginTop: 50,
    },
    innerContainer: {
      marginTop: 200,
  },

    inputContainer2: {
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
    image: {
      width: '100%',
      height: '100%',
      alignItems: "center",
    },
})

export default SearchByCity;
