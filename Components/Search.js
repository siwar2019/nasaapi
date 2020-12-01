import React from 'react'
import { StyleSheet, View, TextInput, Button, Text,FlatList,SafeAreaView  } from 'react-native'
import inf from '../Helpers/Nasadata'
import NasaItem from './NasaItem'

class Search extends React.Component {

  _displayDetails = (id) => {
    console.log("Display id " + id)
   // this.props.navigation.navigate("Details", { id: id })
  }
  render() {
    return (
    
        
        <FlatList 
            data={inf}
            
/*             renderItem={({item}) => <NasaItem element={item}/>}

 */      
renderItem={({item}) => <NasaItem element={item} _displayDetails={this._displayDetails} />}

 />
      
    )
  }
}

const styles = StyleSheet.create({
  areacontainer:{
    
  },
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
   
    borderWidth: 10,
    paddingLeft: 5
  }
})

export default Search