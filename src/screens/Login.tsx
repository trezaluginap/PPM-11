// src/screens/Login.tsx
import React, {useState} from 'react';
import {View, TextInput, Button, Alert, Text, StyleSheet} from 'react-native';
import {auth} from '../firebase/firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('HomeScreen'); // Ganti dengan nama screen tujuan
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Login failed');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        title={loading ? 'Loading...' : 'Login'}
        onPress={handleLogin}
        disabled={loading}
      />
      <Text
        style={styles.signupText}
        onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  signupText: {
    marginTop: 10,
    color: 'blue',
  },
});

export default Login;
