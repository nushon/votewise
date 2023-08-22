import React from "react";
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { images } from "../../styles/GlobalImg";

function HomeScreen() {
    return (
    <SafeAreaView>
        <View style={styles.hero}>
        <Image
          source={images.homeImages.flag_chairDesign}
        style={styles.image} />
        <Text style={styles.title}>LIB Vote Wise</Text>
      </View>

      <View style={styles.textView}>
        <Text style={styles.welcomeText}>Welcome to the 'Future' of Liberians</Text>
      </View>
    </SafeAreaView>
     
    );
  }
  const styles = StyleSheet.create({
    hero: {
      // marginTop: StatusBar.currentHeight || 0,
      padding: 30,
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    title: {
      fontSize: 35,
      color: '#002368',
      fontWeight: 30,
      // marginLeft: 10,
      marginBottom: 50
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'cover', // or other image resizeMode mode
    },
    welcomeText: {
      fontSize: 40,
      // textAlign: 'left'
    },
    textView:{
      width: 350,
      justifyContent: 'center',
      marginLeft: 30,
      marginTop: 50
    }
   
  });

  export default HomeScreen;