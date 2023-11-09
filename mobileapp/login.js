import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if both email and password are filled
    if (email && password) {
      // Add your authentication logic here
      console.log('Email:', email);
      console.log('Password:', password);
      // Replace the console.log with your authentication logic

      // Navigate to the next page (Home) after successful login
      navigation.navigate('Home');
     }
     else {
      Alert.alert('Please fill in both email and password fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://p.kindpng.com/picc/s/495-4954072_beth-and-rose-florist-logo-flower-shop-logo.png',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Text style={styles.signin} onPress={() => navigation.navigate('Signup')}>
        Sign Up For New ?
      </Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linen',
  },
  tinyLogo: {
    width: 200,
    height: 150,
    marginTop: -130,
    marginBottom: 40,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  signin: {
    color: 'blue',
    marginBottom: 15,
    marginTop: -15,
    marginLeft: 220,
  },
});

export default LoginScreen;

