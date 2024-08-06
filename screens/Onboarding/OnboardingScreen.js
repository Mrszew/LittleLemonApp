



// Funkcja walidacji formularza (validateForm):

// Zainicjalizuj zmienną valid na true.
// Sprawdź, czy firstName nie jest pusty i ustaw odpowiedni komunikat o błędzie.
// Sprawdź, czy email jest poprawny za pomocą wyrażenia regularnego i ustaw odpowiedni komunikat o błędzie.
// Zwróć wartość zmiennej valid.
// Funkcja obsługi wysyłania formularza (handleSubmit):

// Zainicjalizuj blok try-catch do obsługi błędów.
// Sprawdź poprawność formularza za pomocą validateForm.
// Jeśli formularz jest poprawny:
// Przekształć dane profilu na format JSON.
// Zapisz dane profilu w AsyncStorage.
// Ustaw isLoading na true.
// Wywołaj LogIn(true) w celu zalogowania użytkownika.
// Przejdź do ekranu 'Home' za pomocą navigation.replace('Home').
// W bloku catch zaloguj błąd.
// Ustaw isLoading na false.
// Renderowanie komponentu:

// SafeAreaView:

// Ustaw style dla SafeAreaView z uwzględnieniem wcięć bezpiecznego obszaru (paddingTop, paddingBottom, paddingLeft, paddingRight).
// ScrollView:

// Ustaw contentContainerStyle z flexGrow: 1.
// Header:

// Renderuj komponent Header z przekazanym navigation.
// KeyboardAwareScrollView:

// Ustaw style na styles.container.
// Ustaw resetScrollToCoords na { x: 0, y: 0 }.
// Ustaw scrollEnabled na true.
// Zawartość hero (heroContainer):

// Renderuj heroHeader z tytułem i podtytułem.
// Renderuj heroContent z opisem i obrazem (heroImage).
// Formularz (formContainer):

// Renderuj Title z napisem "Sign Up".
// Renderuj TextInput dla firstName z odpowiednimi właściwościami.
// Renderuj HelperText dla błędu firstNameError.
// Renderuj TextInput dla email z odpowiednimi właściwościami i keyboardType="email-address".
// Renderuj HelperText dla błędu emailError.
// Renderuj przycisk Button z napisem "Next", wywołującym handleSubmit, z ustawionym loading i disabled na podstawie isLoading.
// Zakończ KeyboardAwareScrollView, ScrollView, i SafeAreaView.

// Eksport:

// Eksportuj komponent OnboardingScreen jako domyślny eksport z pliku.








import React, { useState, useContext } from 'react';

import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { TextInput, HelperText, Button, Title } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as SecureStore from 'expo-secure-store';

import { AuthContext } from '../../context/AuthContext';

import Header from '../Header';

import heroImage from '../../assets/images/heroImage.png';

import { styles } from './OnboardingStyles';

const OnboardingScreen = ({ navigation }) => {

  // useSafeArea
  const insets = useSafeAreaInsets();

  // useState
  const [isLoading, setIsLoading] = useState(false);

  // useState
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // useState error
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  // useContext auth
  const { LogIn } = useContext(AuthContext);

  // validate
  const validateForm = () => {

    // valid
    let valid = true;

    // name
    if (firstName.trim() === '') {
      setFirstNameError('Name is required');
      valid = false;
    } else {
      setFirstNameError('');
    }

    // email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    return valid;

  };

  // submit
  const handleSubmit = async () => {

    try {

      if (validateForm()) {

        const profileData = JSON.stringify({ firstName, lastName, email, phoneNumber });
        await AsyncStorage.setItem('profile', profileData);

        setIsLoading(true);
        LogIn(true);

        navigation.replace('Home');

      }

    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);

  };

  return (

    <SafeAreaView
     style={[styles.safeArea, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
     }]}
    >

      <ScrollView
       contentContainerStyle={{ flexGrow: 1 }}
      >

        <Header
         navigation={navigation}
        />

        <KeyboardAwareScrollView
         style={styles.container}
         resetScrollToCoords={{ x: 0, y: 0 }}
         scrollEnabled={true}
        >

          <View style={styles.heroContainer}>

            <View style={styles.heroHeader}>
              <Text style={styles.heroTitle}>Little Lemon</Text>
              <Text style={styles.heroSubtitle}>Chicago</Text>
            </View>

            <View style={styles.heroContent}>
              <Text style={styles.heroDescription}>
                We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.
              </Text>
              <Image source={heroImage} style={styles.heroImage} />
            </View>

          </View>

          <View style={styles.formContainer}>

            <Title style={styles.formTitle}>Sign Up</Title>

            <TextInput
             label="Name"
             value={firstName}
             onChangeText={(text) => setFirstName(text)}
             style={styles.formInput}
            />
            <HelperText
             type="error"
             visible={!!firstNameError}>
             {firstNameError}
            </HelperText>

            <TextInput
             label="Email"
             value={email}
             onChangeText={(text) => setEmail(text)}
             style={styles.formInput}
             keyboardType="email-address"
            />
            <HelperText
             type="error"
             visible={!!emailError}>
             {emailError}
            </HelperText>

            <View style={styles.formButtonContainer}>
              <Button
               mode="contained"
               onPress={handleSubmit}
               style={styles.formButton}
               loading={isLoading}
               disabled={isLoading}
              >
                <Text style={styles.formButtonText}>
                 Next
                </Text>
              </Button>
            </View>

          </View>

        </KeyboardAwareScrollView>

      </ScrollView>

    </SafeAreaView>

  );

};

export default OnboardingScreen;
