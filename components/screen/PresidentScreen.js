import React from "react";
import {View, Text, SafeAreaView, StatusBar, FlatList, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Data = [
  {
    name: "EDWARD W. APPLETON, JR",
    id: 1,
    party: "Grassroots Development Movement",
    image: require('../../assets/images/presidentsImg/edward-appleton.jpg'),
  },
  {
    name: "JOSEPH N. BOAKAI",
    id: 2,
    party: "Unity Party",
    image: require('../../assets/images/presidentsImg/joseph-boakai.jpg'),
  },
  {
    name: "ALLEN R. BROWN, JR",
    id: 3,
    party: "Liberia Restoration Party",
    image: require('../../assets/images/presidentsImg/allen-brown.jpg'),
  },
  {
    name: "ALEXANDER B. CUMMINGS",
    id: 4,
    party: "Collaborating Political Parties",
    image: require('../../assets/images/presidentsImg/alex-cummings.jpg'),
  },
  {
    name: "SIMEON C. M. FREEMAN",
    id: 5,
    party: "Movement For Progressive Change",
    image: require('../../assets/images/presidentsImg/simeon-freeman.jpg'),
  },
  {
    name: "TIAWAN SAYE GONGLOE",
    id: 6,
    party: "Liberian's People's Party",
    image: require('../../assets/images/presidentsImg/tiawan-gongloe.jpg'),
  },
  
  {
    name: "LUSINEE F. KAMARA, SR",
    id: 7,
    party: "All Liberia Coalition Party",
    image: require('../../assets/images/presidentsImg/lusinee-kamara.jpg'),
  },
  {
    name: "DAVID G. B. KIAMU",
    id: 8,
    party: "Democratic People's Party Of Liberia",
    image: require('../../assets/images/presidentsImg/david-kiamu.jpg'),
  },
  {
    name: "ALEXANDER N. KOLLIE",
    id: 9,
    party: "Reformers National Congress",
    image: require('../../assets/images/presidentsImg/alexander-kollie.jpg'),
  },
  

{
  name: "SHEIKH A. KOUYATEH",
  id: 10,
  party: "Liberia First Movement",
  image: require('../../assets/images/presidentsImg/sheikh-kouyateh.jpg'),
},
{
  name: "BENDU ALEHMA KROMAH",
  id: 11,
  party: "Independent Candidate",
  image: require('../../assets/images/presidentsImg/alehma-kromah.jpg'),
},
{
  name: "RICHARD SAYE MILLER",
  id: 12,
  party: "Liberians For Prosperity",
  image: require('../../assets/images/presidentsImg/richard-miller.jpg'),
},
{
  name: "CLARENCE K. MONIBA",
  id: 13,
  party: "Liberian National Union",
  image: require('../../assets/images/presidentsImg/clarence-moniba.jpg'),
},
{
  name: "ROBERT FRANZ MORRIS",
  id: 14,
  party: "Independent Candidate",
  image: require('../../assets/images/presidentsImg/robert-franz-morris.jpg'),
},
{
  name: "SARA BEYSOLOW NYANTI",
  id: 15,
  party: "African Liberation League",
  image: require('../../assets/images/presidentsImg/sara-nyanti.jpg'),
},
{
  name: "WILLIAM WIAH TUIDER",
  id: 16,
  party: "Democratic National Allegiance",
  image: require('../../assets/images/presidentsImg/william-tuder.jpg'),
},
{
  name: "JOSHUA TOM TURNER",
  id: 17,
  party: "New Liberia Party (NLP)",
  image: require('../../assets/images/presidentsImg/joshua-turner.jpg'),
},
{
  name: "GEORGE MANNEH WEAH",
  id: 18,
  party: "Coalition for Democratic Change",
  image: require('../../assets/images/presidentsImg/george-weah.jpg'),
},
{
  name: "JEREMIAH Z. WHAPOE",
  id: 19,
  party: "Vision for Liberia Transformation",
  image: require('../../assets/images/presidentsImg/jeremiah-whapoe.jpg'),
},
{
  name: "LUTHER N. YORFEE",
  id: 20,
  party: "Liberia Rebuilding Party",
  image: require('../../assets/images/presidentsImg/luther-yorfee.jpg'),
}
]


const Item = ({name, party, image}) =>(
  <View style= {styles.list}>
    <Image style={styles.image} source={image} />
    <View style={styles.infoCard}>
      <Text style= {styles.name}>{name}</Text>
      <Text style={styles.party}>{party}</Text>
    </View>
    
  </View>
) 
function PresidentsScreen() {
    return (
     <SafeAreaView style={styles.container}>
      {/* <StatusBar hidden/> */}
      <FlatList 
        data={Data}
        renderItem={({item}) => <Item image={item.image} name={item.name} party={item.party} />}
        keyExtractor={item => item.id}
      />
     </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight || 0,
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
      fontWeight: 50
    },
    party: {
      fontSize: 15,
      color: '#c0032c',
      flex: 'wrap',
      fontWeight: 50
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
  
  export default PresidentsScreen;