import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigationState } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation, avatar, name }) => {

  // var
  let hasBackButton = false;
  let hasAvatar = false;
  let avatarInitial = null;

  // use Navigation State
  const routeName = useNavigationState(state => state.routes[state.index].name);

  // check back button and avatar info
  if (routeName !== "Onboarding") {
    hasBackButton = navigation.canGoBack();
    hasAvatar = Boolean(avatar && typeof avatar === 'string' && avatar.trim() !== '');
    avatarInitial = name ? name.charAt(0).toUpperCase() : '?';
  }

  // handle Press
  const handleLogoPress = () => {
    navigation.navigate('Home');
  };
  const handleAvatarPress = () => {
    navigation.navigate('Profile');
  };

  return (

    <View style={styles.headerContainer}>

      {
        hasBackButton && (
          <TouchableOpacity
           onPress={() => navigation.goBack()}
           style={styles.backContainer}
           accessibilityLabel="Go back"
          >
            <Icon
             name="arrow-back-circle"
             size={40}
             color="#495E57"
             style={styles.back}
            />
          </TouchableOpacity>
        )
      }

      <TouchableOpacity
       onPress={routeName === "Onboarding" ? undefined : handleLogoPress}
       style={styles.logoContainer}
       accessibilityLabel={routeName === "Onboarding" ? "Logo" : "Go to Home"}
      >
        <Image
         source={require('../assets/images/logo.png')}
         style={styles.logo}
        />
      </TouchableOpacity>

      {
        routeName !== "Onboarding" && (
          <TouchableOpacity
           onPress={handleAvatarPress}
           style={hasAvatar ? null : styles.defaultAvatar}
           accessibilityLabel="Open profile"
          >
            {
              hasAvatar ? (
                <Image
                 source={{ uri: avatar }}
                 style={styles.avatar}
                />
              ) : (
                <Text style={styles.avatarInitial}>
                 {avatarInitial}
                </Text>
              )
            }
          </TouchableOpacity>
        )
      }

    </View>
  );
};

const styles = StyleSheet.create({

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },

  backContainer: {
  },
  back: {
  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 40,
    resizeMode: 'contain',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  defaultAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: {
    color: '#fff',
    fontSize: 18,
  },

});

export default Header;
