import React, {useRef} from 'react';
import {Animated, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotate = () => {
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => rotateValue.setValue(0)); // Reset setelah selesai
  };

  const rotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, {transform: [{rotate: rotateInterpolation}]}]}
      />
      <TouchableOpacity style={styles.button} onPress={rotate}>
        <Text style={styles.buttonText}>Rotate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#ff6f61',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4b6cb7',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
