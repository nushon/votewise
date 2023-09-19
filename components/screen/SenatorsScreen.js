import React, { useState } from "react";
import {Text, StyleSheet, SafeAreaView, FlatList, View, ScrollView} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import data from "../data/senatorsData.json";
import statsData from "../data/CountyStats.json";
// COUNTIES ARRAY 
const counties = ['Bomi', 'Bong', 'Gbarpolu', 'Grand Bassa', 'Grand CapeMount', 'Grand Gedeh', 'Grand Kru', 'Lofa', 'Margibi', 'Maryland', 'Montserrado', 'Nimba', 'Rivercess', 'River Gee', 'Sinoe', ];
    // SENATORS LIST 
const Item = ({name, party}) => (
  <View style= {styles.list}>
    {/* <Image style={styles.image} source={image} /> */}
    <View style={styles.infoCard}>
      <Text style= {styles.name}>{name}</Text>
      <Text style={styles.party}>{party}</Text>
    </View>
    
  </View>
)
// COUNTY STATS 
const Stats = ({title, number}) =>{
  return(
    <View style={styles.voterStats}>
        <Text style={styles.votersTitle}>{title}</Text>
        <Text style={styles.votersNumber}>{number}</Text>
    </View>
  )
 
} 


function SenatorsScreen() {
  // let selectedCounty;
  // let countyStats;
  const [selectedCounty, setSelectedCounty] = useState([]);
  const [countyStats, setCountyStats] = useState([]);
    return (
      <ScrollView>
        <SafeAreaView>
        <SelectDropdown 
          style={styles.dropdownListTitle}
          data={counties}
          onSelect = {(selectedItem) => {
            convertedToLower = selectedItem.toLowerCase();
            data.forEach(element => {
              setSelectedCounty(element[convertedToLower])
            });
            statsData.forEach(element =>{
              setCountyStats(element[convertedToLower])
            });
          }}

          buttonTextAfterSelection={(selectedItem) =>(
          <Text>{selectedItem}</Text>
          )}
           
          // rowTextForSelectionTextAfterSelection={(item, index) =>(
          // <Text>{item}</Text>
          // )}
          renderDropdownIcon={isOpened => {
          return <FontAwesome style={styles.dropdownIcon} name={isOpened ? 'chevron-up' : 'chevron-down'} />;
          }}
          defaultButtonText="Select a county"
          search
          searchPlaceHolder="Search a county"
          renderSearchInputLeftIcon={() => {
            return <FontAwesome name={'search'} style={styles.dropdownSearchicon} />;
          }}
        />
       
        <View style ={styles.votersStatsView}>
          <FlatList
            data={countyStats}
            numColumns={2}
            renderItem={({item}) => <Stats title={item.title} number={item.number} />}
            keyExtractor={item => item.id}

          />
        </View>
        <View>
          <FlatList
            data={selectedCounty}
            renderItem={({item}) => <Item name={item.aspirant} party={item.party} />}
            keyExtractor={item => item.number}
          />
        </View>
      </SafeAreaView>
      </ScrollView>
      
      
    );
    
    
}

  
export default SenatorsScreen;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dropdownListTitle:{
    padding: 20,
    justifyContent: 'center',
    color: 'red',
    backgroundColor: 'red'
  },
  dropdownIcon:{
    color: '#002368',
    fontSize: 15
  },
  dropdownSearchicon: {
    color: '#002368',
    fontSize: 15
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  dropdown: {
    marginTop: 10,
    borderWidth: 1,
    
    borderColor: '#ccc',
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 100 / 2,
    borderColor: '#ccc',
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
      } ,
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
      marginVertical: 5,
      marginHorizontal: 4,
      borderRadius: 8,
      // flexDirection: 'row',   
    },
    votersStatsView:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "center"
    },
    votersTitle: {
      fontSize: 15,
      textAlign: 'center',
      color: '#002368',
      fontWeight: '700'


    },
    votersNumber:{
      fontSize: 22,
      textAlign: 'center',
      color: '#c0032c',
      fontWeight: '500'
    }
    
});
