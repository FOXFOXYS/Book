import React, { useState } from 'react';
import {StyleSheet, Text,View, FlatList} from 'react-native';
import Books from '../datas/books.json';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import axios from 'axios';
import { useCallback } from 'react';
import { add } from 'react-native-reanimated';



function LibraryScreen({navigation}) {
    

    const [recherche, useRecherche] = useState("");

    const [archives, addArchives] = useState([]);

    function changeText(texte) {
        useRecherche(texte)
    }
    
    return(
        <View style={styles.container}>
            <Input placeholder='Mon livre' onChangeText={texte => changeText(texte)}/>       
            <Button title="Rechercher"/>
            <FlatList data={Books} renderItem={({item}) => <Text style={styles.archives} onPress={() => navigation.navigate("book", {title: item.title, description: item.description, url: item.url })}>{item.title}</Text>} />  
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
    archives : {
        marginTop: 15,
    }
})

export default LibraryScreen;