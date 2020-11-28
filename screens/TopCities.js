import React from "react";
import { View, Text, StyleSheet, ImageBackground, } from "react-native";
import BlueButton from "../components/BlueButton";
import { Icon } from 'react-native-elements'
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

const TopCities = ( {navigation, route} ) => {

    const { data } = route.params;

    const image = { uri: "https://wallpapercave.com/wp/wp5594572.png" };

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
      <Text onPress={() => navigation.navigate("population")}>TopCities</Text>
      {data!=null && data.map((test, index) => <View key={test.geonameId} index={index} style={styles.button}><BlueButton onPress={() => navigation.navigate("population", {data: data[index]})} key={test.geonameId} style={styles.button}>{test.adminName1}</BlueButton></View>)}
      </View>
      </ImageBackground>
    </View>
  );
};

function nextIndex(index) {
    return index
}

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
