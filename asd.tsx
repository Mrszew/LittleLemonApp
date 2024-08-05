import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, TextInput, Pressable, View, Image, useColorScheme, useWindowDimensions, Button,Alert } from 'react-native';
import { Routes } from "../navigation/Routes";
import { Auth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Onboarding({ navigation }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Rejestracja zakończona sukcesem!');
    } catch (error) {
      Alert.alert('Błąd', (error as Error).message);
    }
  };
  

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Image 
        style={styles.headerImage}
        source={require("../assets/littleLemonLogo.png")}/>
      </View>
        <View style={styles.midContainer}>
          <Text >
            Let us get to know you
          </Text>
        </View>
          <View style={styles.firstnameContainer}>
            
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            </View>
            <View style={styles.firstnameContainer}>
            <TextInput
              placeholder="Hasło"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
          <Button title="Zarejestruj się" onPress={handleSignUp} />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 1,
  },
  regularText: {
    fontSize: 24,
    padding: 10,
    textAlign: 'center',
    
  },
  inputBox: {
    height: 40,
    width:250,
    margin: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
    marginBottom:30
  },
  welcomeText: {
    fontSize: 40,
    textAlign: 'center',
  },
  pressButton: {
    backgroundColor: '#FFD700', // Peach color
    borderRadius: 20, // Rounded corners
    width:100,
    height:40,
    marginLeft:265
    
    
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Arial',
    textAlign: 'center',
    color:"black"
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  headerContainer:{
      justifyContent:"center",
      alignItems:"center",
      height:80,
      backgroundColor:"#DEE2EB",
      marginBottom:20,
  },
  headerImage:{
      resizeMode:"contain",
      height:200,
      width:150
  },
  midContainer:{
    marginBottom:50
  },
  firstnameContainer:{
    justifyContent:"center",
    alignItems:"center",
    
},
});
