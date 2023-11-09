
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, ScrollView } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [contact, setContact] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      age.trim() === '' ||
      address.trim() === '' ||
      password.trim() === '' ||
      password1.trim() === '' ||
      city.trim() === '' ||
      pincode.trim() === '' ||
      contact.trim() === ''
    ) {
      Alert.alert('All fields are required.');
    } else {
      // All fields are filled, you can navigate to the next page (Login)
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.signpage}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZd1QECMYPlTjuXUDR3iPflGaurHcpkcbKeyXBgWdRDA&s',
          }}
        />
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm Password"
          value={password1}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
          style={styles.input}
        />

        {/* <TextInput
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
          style={styles.input}
        /> */}

        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Pincode"
          value={pincode}
          onChangeText={(text) => setPincode(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Contact Number"
          value={contact}
          onChangeText={(text) => setContact(text)}
          style={styles.input}
        />
        <Button title="Sign in" onPress={handleSignIn} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  signpage: {
    width: '95%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 300,
    height: 200,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 50,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    marginLeft: 40,
    alignItems: 'center',
    marginBottom: 18,
    fontSize: 18,
  },
});

export default SignInScreen;