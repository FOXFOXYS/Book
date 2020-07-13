import React, { useState} from 'react';
import {StyleSheet, Text,View, FlatList} from 'react-native';
import Books from '../datas/books.json';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';




function LibraryScreen({navigation}) {

   function Request() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+recherche)
        .then(res => {
            console.log(res.data.items);
            addArchives(res.data.items);
        })
   }


    const [recherche, useRecherche] = useState("");

    const [archives, addArchives] = useState([]);

    function changeText(texte) {
        useRecherche(texte)
    }
    
    return(
        <View style={styles.container}>
            <Input placeholder='Mon livre' onChangeText={texte => changeText(texte)}/>       
            <Button title="Rechercher" onPress={Request}/>
            <FlatList data={archives} renderItem={({item}) => <Text style={styles.archives} onPress={() => navigation.navigate("book", {title: item.volumeInfo.title, url: item.volumeInfo.imageLinks.thumbnail, description: item.volumeInfo.subtitle  })}>{item.volumeInfo.title}</Text>} keyExtrator={item => item.id.toString()} />  
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
        textAlign: 'center'
    }
})

export default LibraryScreen;