import { StyleSheet } from 'react-native';

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
    navButton: {
      color: '#8FAABD',
      fontSize: 20,
      margin: 20,
      padding: 20,
    }, 
    resultMessage: {
      color: '#8FAABD',
    },
  
  });

  export default styles;