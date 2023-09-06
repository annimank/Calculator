import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles';

export default function Calc() {
    const [textOne, setTextOne] = useState("");
    const [textTwo, setTextTwo] = useState("");
    const [calculations, setCalculations] = useState([]);
    const [resultMessage, setResultMessage] = useState("");
    const navigation = useNavigation();

    const buttonOne = () => {
        const num1 = parseInt(textOne);
        const num2 = parseInt(textTwo);
        const res = num1 + num2;
        const operation = `${num1} + ${num2} = ${res}`;
        setCalculations(prevCalculations => [...prevCalculations, operation]);
        setResultMessage(`${num1} + ${num2} = ${res}`);
        //Alert.alert("Result", res.toString());
        console.log(res);
        console.log('Calculations:', calculations);
        setTextOne("");
        setTextTwo("");
        clearResultMessageAfterDelay();
    };

    const buttonTwo = () => {
        const num1 = parseInt(textOne);
        const num2 = parseInt(textTwo);
        const res = num1 - num2;
        const operation = `${num1} - ${num2} = ${res}`;
        setCalculations(prevCalculations => [...prevCalculations, operation]);
        setResultMessage(`${num1} - ${num2} = ${res}`);
        console.log(res);
        console.log('Calculations:', calculations);
        setTextOne("");
        setTextTwo("");
        clearResultMessageAfterDelay();
    };

    const buttonThree = () => {
        const num1 = parseInt(textOne);
        const num2 = parseInt(textTwo);
        const res = num1 * num2;
        const operation = `${num1} * ${num2} = ${res}`;
        setCalculations(prevCalculations => [...prevCalculations, operation]);
        setResultMessage(`${num1} * ${num2} = ${res}`);
        console.log(res);
        console.log('Calculations:', calculations);
        setTextOne("");
        setTextTwo("");
        clearResultMessageAfterDelay();
    };

    const navigateToHistory = () => {
        navigation.navigate('History', { calculations });
    };

    const clearResultMessageAfterDelay = () => {
        setTimeout(() => {
            setResultMessage("");
        }, 3000);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.pic}>
                <Image style={{ width: 250, height: 250 }} source={require('../assets/CalcLogo.png')} />
            </View>
            <View style={styles.textInput}>
                <TextInput style={styles.textInputField} onChangeText={textOne => setTextOne(textOne)} value={textOne} placeholder="Enter number 1" keyboardType="numeric" />
            </View>
            <View style={styles.textInput}>
                <TextInput style={styles.textInputField} onChangeText={textTwo => setTextTwo(textTwo)} value={textTwo} placeholder="Enter number 2" keyboardType="numeric" />
            </View>
            <View style={styles.buttonContainer}>
                <View>
                    <Pressable style={styles.button1} onPress={buttonOne}>
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={styles.button2} onPress={buttonTwo}>
                        <Text style={styles.buttonText}>-</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={styles.button3} onPress={buttonThree}>
                        <Text style={styles.buttonText}>*</Text>
                    </Pressable>
                </View>
            </View>
            <Text style={styles.resultMessage}>{resultMessage}</Text>

            <Pressable onPress={navigateToHistory}>
                <Text style={styles.navButton}>HISTORY</Text>
            </Pressable>
            <StatusBar style="auto" />
        </KeyboardAvoidingView>
    );

}
