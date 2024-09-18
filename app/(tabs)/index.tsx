// import React from 'react'

import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import tw from "twrnc";


function index() {
  return (<>
  <View>
  <Text>hello</Text>
  <MapView style={styles.map}/>

  </View>
  </>
    
  )
}

const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    },
  });
export default index
