import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground} from "react-native";
import { Icon } from 'react-native-elements'
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

const Population = ( {route, navigation} ) => {
    
    const { data } = route.params;

    const image = { uri: "https://wallpapercave.com/wp/wp5594572.png" };

  return (
      
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>

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

        <Text style={styles.title} onPress={() => navigation.navigate("topCities")}>Population of {data.toponymName}</Text>

        <View style={styles.populationContainer}>
            {/*
            {data.map(test => <Text key={test.geonameId} style={styles.population}>{test.population}</Text>)}
                */}
            <Text style={styles.population}>{data.population}</Text>
        </View>
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
    content: {
        alignItems: 'center'
      },
    iconBack2: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        //marginTop: 200,
        alignItems: "center",
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
    title: {
        marginTop: 15,
        fontSize: 20,
    },
    population: {
        fontSize: 30,
    },
    populationContainer: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'teal',
        width: 200,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,

    },
    image: {
        width: '100%',
        height: '100%',
        //alignItems: "center",
      },
})

export default Population;
