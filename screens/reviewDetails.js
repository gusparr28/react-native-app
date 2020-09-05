import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { globalStyles, images } from '../styles/global';

import Card from '../shared/card';

export default function ReviewDetails({ route }) {

    const { title } = route.params;
    const { rating } = route.params;
    const { body } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});
