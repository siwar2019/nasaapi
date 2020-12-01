// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity  } from 'react-native'

class Details extends React.Component {
  render() {
    const { element, displayDetails } = this.props

    return (
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => displayDetails(element.id)}>
           <View style={styles.main_container}>
        <Text>Détail  {this.props.navigation.state.params.id}</Text>
      </View>
     
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default Details