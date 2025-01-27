import React, { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Basic(){
    const [count, setCount]  = useState<number>(0)
      
  return (
     <View style={styles.container}>
        {/* View */}
        <View style={styles.boxContainer}>
          <View style={styles.redBox}/>
          <View style={styles.blueBox}/>
          <View style={styles.greenBox}/> 
        </View> 
    
        {/* Text */}
        <Text>React Native</Text>
        
        {/* Image */}
        <Image style={styles.image} source={{uri: 'https://imgs.search.brave.com/1KZI44rinXTTZcZwPB_mFT0Qwc0bs7I8pZXTRJH0w2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc3VwZXJtYW4t/cGljdHVyZXMteDhq/OGJscWc0dDllNW5o/bS5qcGc' }}/>
        <Image style={styles.image} source={require('../../assets/banana-cake.jpg')}/>
        {/* Button */}
        <Button color={'red'} title='Click Me' onPress={()=> setCount(count + 1)}/>
    
        <Text>Count is {count}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  }, 
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
  }, 
  redBox : {
    width: 50, 
    height: 50, 
    backgroundColor: 'red'
  },
  blueBox : {
    width: 50, 
    height: 50, 
    backgroundColor: 'blue'
  },
  greenBox : {
    width: 50, 
    height: 50, 
    backgroundColor: 'green',
  },
  image: {
    width: 150, 
    height: 150, 
    resizeMode: 'contain', 
    marginBottom: 10
  }

});

export default Basic
