

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class NasaItem extends React.Component {
  render() {
    const element = this.props.element

    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: element.url}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{element.copyright}</Text>
           
          </View>
          <View style={styles.explanation_container}>
            <Text style={styles.explanation} numberOfLines={1}>{element.explanation}</Text>
          </View>
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    paddingVertical: 8,
    borderWidth:2,
    borderColor: "#808080",
    borderRadius: 50,
   
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius:50
  },
  content_container: {
    flex: 1,
    margin: 5,
 
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',

  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    fontFamily:"Arial",marginEnd:10
  },
 
  explanation_container: {
    flex: 7
  },
  explanation: {
    fontFamily:"Arial",
    marginTop:5

  }
})

export default NasaItem