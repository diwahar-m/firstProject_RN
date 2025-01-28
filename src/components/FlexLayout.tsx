
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FlexLayout() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Layout Using Flex</Text>
      <Text>Main Axis - Row</Text> 
      <View style={styles.rowContainer}>
        <View style={[styles.box, styles.redBox]}></View>
        <View style={[styles.box, styles.blueBox]}></View>
        <View style={[styles.box, styles.greenBox]}></View>
      </View>   
{/*  */}
      <Text>Cross Axis - Row</Text> 
      <View style={styles.columnContainer}>
        <View style={[styles.box, styles.redBox]}></View>
        <View style={[styles.box, styles.blueBox]}></View>
        <View style={[styles.box, styles.greenBox]}></View>
      </View>            
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
    rowContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 15
    }, 
    box: {
        height: 50, 
        width: 50
    }, 
    redBox:  {
        backgroundColor: 'red'
    },
    blueBox:  {
        backgroundColor: 'blue'
    },
    greenBox:  {
        backgroundColor: 'green'
    },
    columnContainer: { 
        height: 200, 
        justifyContent: 'space-between', 
        marginBottom: 20
    }
})
