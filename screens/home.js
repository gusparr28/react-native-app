import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';
import { FlatList } from 'react-native-gesture-handler';

import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { 'title': 'Mario', rating: 5, body: 'fhdsjjgfdsk', key: 1 },
        { 'title': 'Luigi', rating: 4, body: 'shdfodshdsgdf', key: 2 },
        { 'title': 'Andres', rating: 3, body: 'bfdskhgdskhjs', key: 3 }
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews(currentReviews => {
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    };


    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
        // navigation.push('ReviewDetails');
    };

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                keyExtractor={item => item.key.toString()}
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 30,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }
});
