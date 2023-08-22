import React from "react";
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { images } from "../../styles/GlobalImg";
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Data = [
  {
    title: "Voters",
    number: "10,000",
    icon: "group"
  },
  {
    title: "Male",
    number: "5,000",
    icon: "male"
  },
  {
    title: "Female",
    number: "5,000",
    icon: "female"
  }
]

const Item = ({title, number, icon}) =>{
  return(
    <View style={styles.voterStats}>
        <Text style={styles.votersTitle}>{title} <FontAwesome name={icon} color='#c0032c' size={23} /></Text>
        <Text style={styles.votersNumber}>{number}</Text>
    </View>
  )
 
} 
function HomeScreen() {
    return (
    <View>
        <ScrollView>
          <View style={styles.hero}>
            <Image
              source={images.homeImages.flag_chairDesign}
            style={styles.image} />
            <Text style={styles.title}>LIB Vote Wise</Text>
          </View>

          <View style={styles.textView}>
            <Text style={styles.welcomeText}>Be a part of the <Text style={styles.futureText}>'Future Liberia'</Text> we want and dream of</Text>
          </View>

          <View style ={styles.votersStatsView}>
            {Data.map((item, index) => (
              <View key={index}>
                <Item title={item.title} icon={item.icon} number={item.number}/>
              </View>
            ))
            }
          </View>
          <View style={styles.newsView}>
            <Text style={styles.textTitle}>Recent elections news.</Text>
            <View>
              <Image  source={images.homeImages.electionBanner}/>
            </View>
          </View>
        </ScrollView>
    </View>
     
    );
  }
  const styles = StyleSheet.create({
    hero: {
      padding: 30,
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30
    },
    title: {
      fontSize: 33,
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
      color: '#002368'
      // textAlign: 'left'
    },
    textView:{
      width: 350,
      justifyContent: 'center',
      marginLeft: 35,
      // marginTop: 30
    },
    futureText:{
      color:'#c0032c'
    },
    // Voters FlatList Styles 
    voterStats:{
      width: 126,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 4,
      shadowOpacity: 0.26,
      elevation: 4,
      backgroundColor: 'white',
      padding: 10,
      // marginVertical: 10,
      marginHorizontal: 4,
      borderRadius: 8,
      // flexDirection: 'row',   
    },
    votersStatsView:{
      flexDirection: 'row',
      marginTop: 30,
      justifyContent: 'center'
    },
    votersTitle: {
      fontSize: 24,
      textAlign: 'center'

    },
    votersNumber:{
      fontSize: 24,
      textAlign: 'center'
    },
    // News View 
    newsView:{
      alignItems: 'center',
      marginTop: 30
    },
    textTitle: {
      fontSize: 22
    },
    newsHeadlineImage:{
      width: 50,
      height: 50,
      resizeMode: 'cover'
    }
    
  });

  export default HomeScreen;