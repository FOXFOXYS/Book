import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

function HomeScreen({navigation}) {
    function navigateToLibrary() {
        navigation.reset({
            index: 0,
            routes: [
                {name: "library"}
            ]   
        });
    }

    return(
        <View style={styles.container}>
            <Image source={{ uri: 'https://zupimages.net/up/20/29/n7nr.png' }} style={{ width: 200, height: 200 }} PlaceholderContent={<ActivityIndicator />}/>
            <Button title="Start" onPress={navigateToLibrary} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default HomeScreen;