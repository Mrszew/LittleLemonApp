import React, { useState, useEffect, useCallback } from 'react';

import { SafeAreaView, ScrollView, View, Text, TextInput, Image, FlatList } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as SecureStore from 'expo-secure-store';

import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../Header';

import CategoryButton from './CategoryButton';
import MenuItem from './MenuItem';

import filterMenuItems from './FilterMenuItems';

import menuItemsData from '../../assets/json/menuItems.json';

import heroImage from '../../assets/images/heroImage.png';

import { styles } from './HomeStyles';

const HomeScreen = ({ navigation }) => {

  // useSafeArea
  const insets = useSafeAreaInsets();

  // useState
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await AsyncStorage.getItem('profile');
        if (profileData) {
          const { avatar, firstName } = JSON.parse(profileData);
          setAvatar(avatar);
          setFirstName(firstName.charAt(0).toUpperCase() + firstName.slice(1));
        }
      } catch (error) {
        console.error('Failed to load profile', error);
      }
    };
    loadProfile();
  }, []);

  // categories
  const categories = ['starters', 'mains', 'desserts', 'drinks', 'etc'];

  // handle Category Press
  const handleCategoryPress = (category) => {
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(cat => cat !== category)
        : [...prevCategories, category]
    );
  };

  // handle Filter Menu Items
  const handleFilterMenuItems = useCallback(() => {
    const filteredItems
      = filterMenuItems(
        menuItemsData,
        selectedCategories,
        searchTerm
      );
    setMenuItems(filteredItems);
  }, [selectedCategories, searchTerm]);
  useEffect(() => {
    handleFilterMenuItems();
  }, [handleFilterMenuItems]);

  // separator
  const separator = () => (
    <View style={styles.menuItemSeparator} />
  );

  return (

    <SafeAreaView
     style={[styles.safeArea, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
     }]}
    >

      <FlatList

        ListHeaderComponent={

          <>

            <Header
             navigation={navigation}
             avatar={avatar}
             name={firstName}
            />

            <View style={styles.container}>

              <View style={styles.heroContainer}>

                <View style={styles.heroHeader}>
                  <Text style={styles.heroTitle}>Little Lemon</Text>
                  <Text style={styles.heroSubtitle}>Chicago</Text>
                </View>

                <View style={styles.heroContent}>
                  <Text style={styles.heroDescription}>
                   We are a family-owned Mediterranean restaurant, 
                   focused on traditional recipes served with a modern twist.
                  </Text>
                  <Image source={heroImage} style={styles.heroImage} />
                </View>

                <View style={styles.searchContainer}>
                  <Icon
                   name="search"
                   size={20}
                   color="#495E57"
                   style={styles.searchIcon}
                  />
                    <TextInput
                     style={styles.searchInput}
                     placeholder="Search"
                     value={searchTerm}
                     onChangeText={setSearchTerm}
                    />
                </View>

              </View>

              <View style={styles.categoryContainer}>

                <Text style={styles.categoryTitle}>
                 ORDER FOR DELIVERY!
                </Text>

                <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 style={styles.categoriesContainer}
                >

                  {categories.map(category => (
                    <CategoryButton
                     key={category}
                     category={category}
                     isSelected={selectedCategories.includes(category)}
                     onPress={() => handleCategoryPress(category)}
                    />
                  ))}

                </ScrollView>

              </View>

              <View style={styles.categorySeparator} />

            </View>

          </>

        }

        data={menuItems}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={(item) => item.name}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        ItemSeparatorComponent={separator}

        ListEmptyComponent={

          <View style={styles.noItemsContainer}>
            <Text style={styles.noItemsText}>No items found</Text>
          </View>

        }

      />

    </SafeAreaView>

  );

};

export default HomeScreen;
