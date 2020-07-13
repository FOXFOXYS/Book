import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';


const BookScreen = ({navigation, route}) => {

    function ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    };

    const book = route.params;

    return(
        <View style={styles.container}>
            <Image source={{ uri: book.url }} style={{ width: 400, height: 500 }} PlaceholderContent={<ActivityIndicator />}/>
            <Text h1>{book.title}</Text>
            <Text h2>{book.description}</Text>
            <Rating showRating onFinishRating={ratingCompleted} style={{ paddingVertical: 10 }}/>
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
})


export default BookScreen;