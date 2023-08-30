import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, ScrollView, Pressable, Image, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [calculations, setCalculations] = useState([]);

  const buttonOne = () => {
    const num1 = parseInt(textOne);
    const num2 = parseInt(textTwo);
    const res = num1 + num2;
    const operation = `${num1} + ${num2} = ${res}`;
    setCalculations(prevCalculations => [...prevCalculations, operation]);
    //Alert.alert("Result", res.toString());
    console.log(res);
    setTextOne("");
    setTextTwo("");
  };

  const buttonTwo = () => {
    const num1 = parseInt(textOne);
    const num2 = parseInt(textTwo);
    const res = num1 - num2;
    const operation = `${num1} - ${num2} = ${res}`;
    setCalculations(prevCalculations => [...prevCalculations, operation]);
    console.log(res);
    setTextOne("");
    setTextTwo("");
  };

  const buttonThree = () => {
    const num1 = parseInt(textOne);
    const num2 = parseInt(textTwo);
    const res = num1 * num2;
    const operation = `${num1} * ${num2} = ${res}`;
    setCalculations(prevCalculations => [...prevCalculations, operation]);
    console.log(res);
    setTextOne("");
    setTextTwo("");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.pic}>
        <Image style={{ width: 250, height: 250 }} source={require('./assets/CalcLogo.png')} />
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
      <View style={styles.resPic}>
        <Image style={{ width: 150, height: 75 }} source={require('./assets/CalcResLogo.png')} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#285474',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#1A4360',
    margin: 10,
    padding: 5,
    borderRadius: 2,
    alignItems: 'center',
  },
  textInputField: {
    width: 120,
    height: 50,
    textAlign: 'center',
    fontSize: 17,
    color: '#8FAABD',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 60,
  },
  button1: {
    backgroundColor: '#1A4360',
    width: 25,
    height: 25,
    margin: 10,
    borderRadius: 2,
    marginRight: 30,
  },
  button2: {
    backgroundColor: '#1A4360',
    width: 25,
    height: 25,
    borderRadius: 2,
    margin: 10,
    marginRight: 30,
    marginLeft: 30,
  },
  button3: {
    backgroundColor: '#1A4360',
    width: 25,
    height: 25,
    borderRadius: 2,
    margin: 10,
    marginLeft: 30,
  },
  buttonText: {
    color: '#8FAABD',
    fontSize: 20,
    textAlign: 'center',
  },
  historyContainer: {
    width: 200,
    borderRadius: 2,
    backgroundColor: '#1A4360',
    margin: 20,
    padding: 15,
    borderRadius: 2,
  },
  historyContainerText: {
    color: '#8FAABD',
  },
  pic: {
    alignItems: 'center',
    marginTop: 10,
  },
  resPic: {
    alignItems: 'center',
    width: 10,
    height: 5,
    marginBottom: 50,
    marginTop: 20,
  },

});