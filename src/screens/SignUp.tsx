// src/screens/SignUp.tsx
import React, {useState} from 'react';
import {View, TextInput, Button, Alert, Text, StyleSheet} from 'react-native';
import {auth} from '../firebase/firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const SignUp = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('Login'); // Ganti dengan nama screen tujuan
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Sign up failed');
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
        title={loading ? 'Loading...' : 'Sign Up'}
        onPress={handleSignUp}
        disabled={loading}
      />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
        Already have an account? Log In
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
  loginText: {
    marginTop: 10,
    color: 'blue',
  },
});

export default SignUp;
