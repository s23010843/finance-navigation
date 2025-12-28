import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles, { PrimaryButton } from '../../styles/AuthStyles';

export function ResetPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const disabled = !email || sent;

  function handleSend() {
    // In a real app you'd call your API here. We'll simulate success.
    setSent(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%' }}>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            <View style={styles.logo} />
            <Text style={styles.title}>Reset your password</Text>
            <Text style={styles.subtitle}>Enter your account email and we'll send a reset link.</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={text => { setEmail(text); if (sent) setSent(false); }}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <PrimaryButton title={sent ? 'Link sent' : 'Send reset link'} onPress={handleSend} disabled={disabled} />

            {sent ? <Text style={{ marginTop: 12, textAlign: 'center', color: '#059669' }}>We've sent a reset link to your email.</Text> : null}

            <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
              <Text style={styles.link}>Back to sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default ResetPassword;