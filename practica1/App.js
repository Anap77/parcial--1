import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo image */}
      <Image source={{ uri: '' }} style={styles.logo} />

      {/* Form title */}
      <Text style={styles.title}>NFL FORM</Text>

      {/* Form container */}
      <View style={styles.formContainer}>
        <FormInput 
          label="ID" 
          value={formData.id} 
          onChangeText={(text) => handleChange('id', text)} 
          placeholder="Enter your ID"
        />
        <FormInput 
          label="Name" 
          value={formData.name} 
          onChangeText={(text) => handleChange('name', text)} 
          placeholder="Enter your name"
        />
        <FormInput 
          label="Email" 
          value={formData.email} 
          onChangeText={(text) => handleChange('email', text)} 
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <FormInput 
          label="Phone" 
          value={formData.phone} 
          onChangeText={(text) => handleChange('phone', text)} 
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>

      {/* Display the entered data in real-time */}
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}><strong>ID:</strong> {formData.id}</Text>
        <Text style={styles.dataText}><strong>Name:</strong> {formData.name}</Text>
        <Text style={styles.dataText}><strong>Email:</strong> {formData.email}</Text>
        <Text style={styles.dataText}><strong>Phone:</strong> {formData.phone}</Text>
      </View>
    </ScrollView>
  );
}


const FormInput = ({ label, value, onChangeText, placeholder, keyboardType }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}:</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#fff"
      keyboardType={keyboardType}
    />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1E3A8A', 
  },
  logo: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50, 
    height: 50,
    zIndex: 1, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', 
  },
  formContainer: {
    backgroundColor: '#003366', 
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    color: '#fff', 
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#fff', 
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#fff', // Blanco para el texto dentro de los inputs
  },
  dataContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FFEB3B', 
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 16,
    color: '#003366', 
    marginBottom: 10,
  },
});