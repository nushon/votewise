import React from "react";
import {View, Text, StyleSheet, FlatList, SafeAreaView, Image} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { SenatorsData } from "../data/SenatorsData.js";


const Item = ({name, party, image}) => (
  <View style= {styles.list}>
    <Image style={styles.image} source={image} />
    <View style={styles.infoCard}>
      <Text style= {styles.name}>{name}</Text>
      <Text style={styles.party}>{party}</Text>
    </View>
    
  </View>
) 

function SenatorsScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={SenatorsData} // This should be the array of counties, not the entire SenatorsData
          renderItem={({item}) => (
            <FlatList
              data={item} // Iterate through each county's aspirants
              renderItem={({ item: aspirant }) => (
                <Item image={aspirant.photo} name={aspirant.aspirant} party={aspirant.party} />
              )}
              keyExtractor={(aspirant) => item.county + aspirant.number}
 // Use a unique key for each aspirant
            />
          )}
        keyExtractor={(county) => county} // Use a unique key for each county
      />

     </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    container: {
      // marginTop: StatusBar.currentHeight || 0,
    },
    list: {
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 4,
      shadowOpacity: 0.26,
      elevation: 4,
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 16,
      borderRadius: 8,
      flexDirection: 'row',
    },
    name: {
      fontSize: 20,
      color: '#002368',
      marginTop: 10,
      fontWeight: '300'
    },
    party: {
      fontSize: 15,
      color: '#c0032c',
      flexWrap: 'wrap',
      fontWeight: '300'
    },
    image: {
      width: 85,
      height: 85,
      borderRadius: 100 / 2,
      resizeMode: 'cover', 
    },
    infoCard:{
      flexDirection: 'column',
      marginLeft: 18
    } 
  });
  export default SenatorsScreen