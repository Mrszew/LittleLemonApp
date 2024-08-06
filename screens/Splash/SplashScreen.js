import React from 'react';

import { View, StyleSheet } from 'react-native';

import { ProgressBar } from 'react-native-paper';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={0.5} color="#6200ee" style={styles.progressBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: '80%',
  },
});

export default SplashScreen;
