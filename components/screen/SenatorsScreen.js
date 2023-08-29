import React from "react";
import {Text, StyleSheet, SafeAreaView} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { SenatorsData } from "../data/SenatorsData";
import { Data } from "../data/SenatorsData.js";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const counties = ["Bomi", "Bong", 'Gbarpolu', 'Grand Bassa', 'Grand Cape Mount', 'Grand Gedeh', 'Grand Kru', 'Lofa', 'Margibi', 'Maryland', 'Montserrado', 'Nimba', 'Rivercess', 'River Gee', 'Sinoe', ];

//  const ListView = ({list})=>(
//   <TouchableOpacity>
//     <Text>{list}</Text>
//   </TouchableOpacity>
// )
    

const Senators = ({name, party, image}) => (
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
      <SafeAreaView>
        <SelectDropdown 
          style={styles.dropdownListTitle}
          data={counties}
          onSelect = {(selectedItem) =>{
           console.log("This is the data: ", Data);
           <Text>{selectedItem}</Text>
          }}
            
          buttonTextAfterSelection={(selectedItem) =>(
          <Text>{selectedItem}</Text>
          )}
           
          rowTextForSelectionTextAfterSelection={(item, index) =>(
          <Text>{item}</Text>
          )}
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
      </SafeAreaView>
      
      // 
    );
}

  
  export default SenatorsScreen




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
      } 
    
});

// export default SelectCounty;
