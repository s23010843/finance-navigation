import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles, { PrimaryButton } from '../../styles/AuthStyles';
import { isValidEmail } from '../../utils/validators';

export function Signup() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touchedEmail, setTouchedEmail] = useState(false);

  const emailValid = isValidEmail(email);
  const disabled = !emailValid || !password || !name;

  function handleSubmit() {
    navigation.navigate('HomeTabs' as never);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%' }}>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            <View style={styles.logo} />
            <Text style={styles.title}>Create an account</Text>
            <Text style={styles.subtitle}>Start using Finance Navigation in minutes</Text>

            <TextInput
              style={styles.input}
              placeholder="Full name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(t) => { setEmail(t); setTouchedEmail(true); }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touchedEmail && !emailValid && email.length > 0 ? (
              <Text style={{ color: '#dc2626', alignSelf: 'flex-start', marginTop: 4 }}>Please enter a valid email address.</Text>
            ) : null}

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <PrimaryButton title="Sign Up" onPress={handleSubmit} disabled={disabled} />

            <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
              <Text style={styles.link}>Already have an account? Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}