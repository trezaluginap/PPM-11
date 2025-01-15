// src/screens/HomeScreen.tsx

import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      {/* Judul atau Header */}
      <Text style={styles.title}>Welcome to Home Screen</Text>

      {/* Gambar */}
      <Image
        style={styles.image}
        source={{uri: 'https://your-image-url.com/path-to-image.jpg'}}
      />

      {/* Deskripsi atau Konten */}
      <Text style={styles.description}>
        This is a simple home screen to navigate to other screens or display
        information.
      </Text>

      {/* Tombol untuk Navigasi atau Aksi */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')} // Asumsi ada screen 'Details'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});

export default HomeScreen;
