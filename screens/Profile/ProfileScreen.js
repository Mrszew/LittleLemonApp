import React, { useState, useEffect, useContext } from 'react';

import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { TextInput, HelperText, Button, Checkbox } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as SecureStore from 'expo-secure-store';

import * as ImagePicker from 'expo-image-picker';

import { AuthContext } from '../../context/AuthContext';

import Header from '../Header';

import { profileSchema } from '../../utils/validation';

import { styles } from './profileStyles';

const ProfileScreen = ({ navigation }) => {

  // useSafeArea
  const insets = useSafeAreaInsets();

  // useContext
  const { LogOut } = useContext(AuthContext);

  // useState
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notifications, setNotifications] = useState({
    orderStatuses: false,
    passwordChanges: false,
    specialOffers: false,
    newsletters: false,
  });
  const [originalProfile, setOriginalProfile] = useState(null);
  const [errors, setErrors] = useState({});

  // useEffect
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await AsyncStorage.getItem('profile');
        if (profileData) {
          const {
            avatar,
            firstName,
            lastName,
            email,
            phoneNumber,
            notifications
          } = JSON.parse(profileData);
          setAvatar(avatar);
          setFirstName(firstName.charAt(0).toUpperCase() + firstName.slice(1));
          setLastName(lastName.charAt(0).toUpperCase() + lastName.slice(1));
          setEmail(email);
          setPhoneNumber(phoneNumber);
          setNotifications(notifications || {});
          setOriginalProfile(profileData);
        }
      } catch (error) {
        console.error('Failed to load profile', error);
      }
    };
    loadProfile();
  }, []);

  // handle Avatar Change
  const handleAvatarChange = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  };
  const handleAvatarRemove = () => {
    setAvatar(null);
  };

  // handle Discard Changes
  const handleDiscardChanges = () => {
    if (originalProfile) {
      const {
        avatar,
        firstName,
        lastName,
        email,
        phoneNumber,
        notifications
      } = JSON.parse(originalProfile);
      setAvatar(avatar);
      setFirstName(firstName.charAt(0).toUpperCase() + firstName.slice(1));
      setLastName(lastName.charAt(0).toUpperCase() + lastName.slice(1));
      setEmail(email);
      setPhoneNumber(phoneNumber);
      setNotifications(notifications || {});
    }
  };

  // handle Save Changes
  const handleSaveChanges = async () => {
    try {
      await profileSchema.validate({ firstName, lastName, email, phoneNumber }, { abortEarly: false });
      const profileData = JSON.stringify({ avatar, firstName, lastName, email, phoneNumber, notifications });
      await AsyncStorage.setItem('profile', profileData);
      alert('Profile saved successfully');
      setOriginalProfile(profileData);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  // handle Log out
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('profile');
      LogOut();
      navigation.replace('Onboarding');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  // toggle Notification
  const toggleNotification = (key) => {
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [key]: !prevNotifications[key],
    }));
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
         avatar={avatar}
         name={firstName}
        />

        <KeyboardAwareScrollView
         style={styles.container}
         resetScrollToCoords={{ x: 0, y: 0 }}
         scrollEnabled={true}>

          <View style={styles.container}>

            <Text style={styles.title}>Personal information</Text>

            <View style={styles.avatarContainer}>

              <TouchableOpacity onPress={handleAvatarChange}>
                {
                  avatar ? (
                    <Image
                     source={{ uri: avatar }}
                     style={styles.avatar}
                    />
                  ) : (
                    <View style={styles.defaultAvatar}>
                      <Text style={styles.avatarInitial}>
                       {firstName ? firstName.charAt(0).toUpperCase() : '?'}
                      </Text>
                    </View>
                  )
                }
              </TouchableOpacity>

              <View style={styles.avatarButtons}>
                <Button
                 mode="contained"
                 onPress={handleAvatarChange}
                 style={styles.avatarButtonChange}
                >
                <Text style={styles.avatarButtonTextChange}>Change</Text>
                </Button>
                <Button
                 mode="contained"
                 onPress={handleAvatarRemove}
                 style={styles.avatarButtonRemove}
                >
                <Text style={styles.avatarButtonTextRemove}>Remove</Text>
                </Button>
              </View>

            </View>

            <TextInput
             label="First Name"
             value={firstName}
             onChangeText={text => setFirstName(text.charAt(0).toUpperCase() + text.slice(1))}
             error={!!errors.firstName}
             style={styles.formInput}
            />
            <HelperText
             type="error"
             visible={!!errors.firstName}
            >
             {errors.firstName}
            </HelperText>

            <TextInput
             label="Last Name"
             value={lastName}
             onChangeText={text => setLastName(text.charAt(0).toUpperCase() + text.slice(1))}
             error={!!errors.lastName}
             style={styles.formInput}
            />
            <HelperText
             type="error"
             visible={!!errors.lastName}
            >
             {errors.lastName}
            </HelperText>

            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              error={!!errors.email}
              style={styles.formInput}
            />
            <HelperText
             type="error"
             visible={!!errors.email}
            >
             {errors.email}
            </HelperText>

            <TextInput
             label="Phone Number"
             value={phoneNumber}
             onChangeText={setPhoneNumber}
             error={!!errors.phoneNumber}
             style={styles.formInput}
            />
            <HelperText
             type="error"
             visible={!!errors.phoneNumber}
            >
             {errors.phoneNumber}
            </HelperText>

            <Text style={styles.notificationsTitle} >
             Email Notifications
            </Text>

            <View style={styles.checkboxContainer}>
              <Checkbox
               status={notifications.orderStatuses ? 'checked' : 'unchecked'}
               onPress={() => toggleNotification('orderStatuses')}
              />
              <Text>Order statuses</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
               status={notifications.passwordChanges ? 'checked' : 'unchecked'}
               onPress={() => toggleNotification('passwordChanges')}
              />
              <Text>Password changes</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
               status={notifications.specialOffers ? 'checked' : 'unchecked'}
               onPress={() => toggleNotification('specialOffers')}
              />
              <Text>Special offers</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
               status={notifications.newsletters ? 'checked' : 'unchecked'}
               onPress={() => toggleNotification('newsletters')}
              />
              <Text>Newsletters</Text>
            </View>

            <View style={styles.buttonContainerLogout}>
              <Button
               mode="contained"
               onPress={handleLogout}
               style={styles.buttonLogout}
              >
                <Text style={styles.buttonTextLogout}>
                 Log out
                </Text>
              </Button>
            </View>

            <View style={styles.buttonContainerChanges}>
              <Button
               mode="contained"
               onPress={handleDiscardChanges}
               style={styles.buttonDiscardChanges}
              >
                <Text style={styles.buttonTextDiscardChanges}>
                 Discard Changes
                </Text>
              </Button>
              <Button
               mode="contained"
               onPress={handleSaveChanges}
               style={styles.buttonSaveChanges}
              >
                <Text style={styles.buttonTextSaveChanges}>
                 Save Changes
                </Text>
              </Button>
            </View>

          </View>

        </KeyboardAwareScrollView>

      </ScrollView>

    </SafeAreaView>

  );

};

export default ProfileScreen;
