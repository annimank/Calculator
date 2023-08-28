import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList, TouchableOpacity } from 'react-native';

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
    Alert.alert("Result", res.toString());
    console.log(res);
  };

  const buttonTwo = () => {
    const num1 = parseInt(textOne);
    const num2 = parseInt(textTwo);
    const res = num1 - num2;
    const operation = `${num1} - ${num2} = ${res}`;
    setCalculations(prevCalculations => [...prevCalculations, operation]);
    Alert.alert("Result", res.toString());
    console.log(res);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>I can do addition and subtraction</Text>
      </View>
      <View style={styles.textInput}>
        <TextInput onChangeText={textOne => setTextOne(textOne)} value={textOne} placeholder="Enter number 1" keyboardType="numeric" />
        <TextInput onChangeText={textTwo => setTextTwo(textTwo)} value={textTwo} placeholder="Enter number 2" keyboardType="numeric" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={buttonOne}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={buttonTwo}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.historyContainer}>
        <FlatList
          data={calculations}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C07156',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#E8C3B6',
    color: '#7D736C',
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    borderColor: '#EC4500',
    borderWidth: 0,
    alignItems: 'center',
    width: 220,
    borderRadius: 20,
    textAlign: 'center',
  },
  textInput: {
    width: 220,
    borderColor: '#EC6B00',
    backgroundColor: '#E8C3B6',
    borderWidth: 0,
    marginBottom: 20,
    marginTop: 20,
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  button: {
    backgroundColor: '#E8C3B6',
    width: 25,
    height: 25,
    borderRadius: 60,
  },
  buttonText: {
    color: '#7D736C', 
    fontSize: 20,
    textAlign: 'center',
  },  
  historyContainer: {
    width: 220,
    borderColor: '#EC6B00',
    backgroundColor: '#E8C3B6',
    borderWidth: 0,
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
  },
});
