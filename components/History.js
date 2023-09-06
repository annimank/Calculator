import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ScrollView, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../assets/styles';

export default function History() {

    const [calculations, setCalculations] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route;

    useEffect(() => {
        if (params && params.calculations) {
            setCalculations(params.calculations);
            console.log('Calculations in History:', params.calculations);
        }
    }, [params]);

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.resPic}>
                <Image style={{ width: 150, height: 75 }} source={require('../assets/CalcResLogo.png')} />
            </View>
            <ScrollView style={styles.historyContainer}>
                <FlatList
                    data={calculations}
                    renderItem={({ item }) => <Text style={styles.historyContainerText}>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
            <StatusBar style="auto" />
        </KeyboardAvoidingView>
    );

}
