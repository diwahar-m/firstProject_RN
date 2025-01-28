
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function TouchableComponents() {
    const [opacityCount, setOpacityCount] = useState(0)
    const [highlightCount, setHighlightCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable Component</Text>
      <TouchableOpacity style={styles.button} onPress={()=> setOpacityCount(opacityCount + 1)}>
        <Text style={styles.btnText}>Touchable Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight 
        style={styles.button} 
        onPress={()=> setHighlightCount(highlightCount + 1)}
        underlayColor={'red'}
      >
        <Text style={styles.btnText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textDecorationLine: 'underline'
    },
    button: {
        backgroundColor: '#096dbe', 
        padding: 15, 
        borderRadius: 5, 
        marginBottom : 10, 
        cursor: 'pointer'
    }, 
    btnText: {
        fontWeight: 'bold', 
        color: '#ffffff', 
        fontSize:18
    }
})
