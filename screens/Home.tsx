import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput,Pressable,View,Image,  useColorScheme, useWindowDimensions } from 'react-native';
import { Routes } from "../navigation/Routes";

export default function Home({navigation}) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn,onLogin] = useState(false);
  const colorScheme = useColorScheme(); //okresla czy dark mode czy light
  const  {width,height,fontScale} = useWindowDimensions(); //okresla wymiary ekranow
  // hook comunity przydatne hooki

  const handleLogin =() =>{
    onLogin(true);
  };
  const handleLogout = () => {
    onLogin(false);
  };
  return (
      <ScrollView style={[styles.container, colorScheme === "light"  //warunek
          ? {backgroundColor:"#fff"} // prawda, a na dole falsz
          : {backgroundColor:"#333333"}]}>
        <View style={styles.headerContainer}>
          <Text style={[styles.headerText, colorScheme ==="light" 
          ? {color:"#333333"}
          : {color:"#EDEFEE"}]}>
          Little Lemon</Text>
          <Image
          resizeMode='cover' 
          style={styles.logo} 
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
          source={require("../assets/little.png")}/>
        </View>  
        <Text style={[styles.welcomeText, colorScheme ==="light"
          ? {color:"#333333"}
          : {color:"#EDEFEE"}]}>
          Welcome to Little Lemon</Text>
        {loggedIn ? (
          <Pressable style={styles.pressButton} onPress={handleLogout}>
            <Text style={[styles.buttonText, colorScheme ==="light"
            ? {color:"black"}
            : {color:"white"}]}> 
            You are logged in!</Text>
            <Text>Color Scheme:{colorScheme} </Text>
          </Pressable>
        ) : (
          <>
            <Text style={[styles.regularText,colorScheme === "light"
            ?{color:"black"}
            :{color:"white"}]}>
            Login to continue </Text>
            <TextInput
              style={styles.inputBox}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={'email'}
              keyboardType={'email-address'}
              clearButtonMode='always'
            />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'password'}
            keyboardType={'default'}
            secureTextEntry={true}
            clearButtonMode='always'
          />  
            <View style={styles.pressButtonContainer}>
              <Pressable style={styles.pressButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log in</Text>
              </Pressable>
            </View>  
          </>
        )}
      </ScrollView>
        
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
    
    marginBottom:1,
    flex:1
    
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',

  },
  welcomeText:{
    color:'#EDEFEE',
    fontSize:40,
    textAlign:'center'
  },
  pressButton:{
    backgroundColor: '#FFAD8F', // Peach color
    borderRadius: 25, // Rounded corners
    paddingVertical: 20,
    paddingHorizontal: 20,
    width:200,
    
  },
  buttonText:{
    color: '#EDEFEE',
    fontSize: 20,
    fontFamily: 'Arial',
    textAlign: 'center',
    
  },
  pressButtonContainer:{
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    marginTop:20,
    
  },
  headerContainer:{
    marginBottom:1,
    alignItems: 'center',
    
    justifyContent:"center",
    
  },
  logo:{
    height:100,
    width:100,
    borderRadius:20
    
    
    
    
    
    
  },
});



