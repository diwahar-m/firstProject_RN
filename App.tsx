import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Basic from './src/components/Basic';
import TextInputComponent from './src/components/TextInput';
import ScrollViewComponent from './src/components/ScrollView';
import StylingDemo from './src/components/Styling';
import FlexLayout from './src/components/FlexLayout';
import TouchableComponents from './src/components/Touchable';

function App(): React.JSX.Element {
  return (
   <View style={styles.container}>
     <ScrollView 
     nestedScrollEnabled={true} 
     contentContainerStyle={styles.scrollViewContainer}>

     <Basic />
     <TextInputComponent />
     <ScrollViewComponent />
     <StylingDemo />
     <FlexLayout />
     <TouchableComponents />
     </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  }, 
  scrollViewContainer: {
    padding:20
  }

});

export default App;
