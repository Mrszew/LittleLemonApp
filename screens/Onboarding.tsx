import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, TextInput, Pressable, View, Image, useColorScheme, useWindowDimensions, Button } from 'react-native';
import { Routes } from "../navigation/Routes";

export default function Onboarding({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, onLogin] = useState(false);
  const colorScheme = useColorScheme(); // Określa, czy jest dark mode czy light
  

  const handleLogin = () => {
    onLogin(true);
  };

  const handleLogout = () => {
    onLogin(false);
  };

  return (
    <SafeAreaView style={[styles.container, colorScheme === "light" ? { backgroundColor: "#fff" } : { backgroundColor: "#333333" }]}>
      <View style={styles.headerContainer}>
        <Image 
        style={styles.headerImage}
        source={require("../assets/littleLemonLogo.png")}/>
      </View>
        <View style={styles.midContainer}>
          <Text style={[styles.headerText, colorScheme === "light" ? { color: "#333333" } : { color: "#EDEFEE" }]}>
            Let us get to know you
          </Text>
        </View>
        {loggedIn ? (
          <Pressable style={styles.pressButton} onPress={handleLogout}>
            <Text style={[styles.buttonText, colorScheme === "light" ? { color: "black" } : { color: "white" }]}>
              You are logged in!
            </Text>
            <Text>Color Scheme: {colorScheme} </Text>
          </Pressable>
        ) : (
          <>
          <View style={styles.firstnameContainer}>
            <Text style={[styles.regularText, colorScheme === "light" ? { color: "black" } : { color: "white" }]}>
              First Name
            </Text>
            <TextInput
              style={styles.inputBox}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={'email'}
              keyboardType={'email-address'}
              clearButtonMode='always'
            />
            </View>
            <TextInput
              style={styles.inputBox}
              value={password}
              onChangeText={onChangePassword}
              placeholder={'password'}
              keyboardType={'default'}
              secureTextEntry={true}
              clearButtonMode='always'
            />
            <View style={styles.pressButton}>
              <Button
                title="Next"
                onPress={() => navigation.navigate('Subscribe')}
              />
            </View>
          </>
        )}
      
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  welcomeText: {
    fontSize: 40,
    textAlign: 'center',
  },
  pressButton: {
    backgroundColor: '#FFAD8F', // Peach color
    borderRadius: 20, // Rounded corners
    width:100,
    height:40,
    marginLeft:265
    
    
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Arial',
    textAlign: 'center',
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
      backgroundColor:"grey",
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
    backgroundColor:"red"
},
});
