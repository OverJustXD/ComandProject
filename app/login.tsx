import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { retroStyles, retroTheme } from '../constants/retroStyles';
import { useAuth } from '../context/_authContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Система", "Помилка: Заповніть усі інпути!");
      return;
    }
    if (login(email, password)) {
      router.replace('/');
    } else {
      Alert.alert("Система", "Доступ відхилено: невірні дані.\n(Тест: admin@space.ua / 123)");
    }
  };

  return (
    <View style={[retroStyles.container, styles.center]}>
      <View style={[retroStyles.brutalCard, { width: '90%' }]}>
        <Text style={styles.title}>{"[ ВХІД ДО СИСТЕМИ ]"}</Text>
        
        <Text style={styles.label}>Е-ПОШТА:</Text>
        <TextInput 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail} 
          placeholder="user@space.ua"
          placeholderTextColor="#A0A0A0"
          autoCapitalize="none"
        />

        <Text style={styles.label}>ПАРОЛЬ:</Text>
        <TextInput 
          style={styles.input} 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry
          placeholder="••••••"
          placeholderTextColor="#A0A0A0"
        />

        <TouchableOpacity style={[retroStyles.brutalButton, { marginTop: 10 }]} onPress={handleLogin}>
          <Text style={retroStyles.buttonText}>УВІЙТИ_</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20, alignItems: 'center' }} onPress={() => router.push('/register')}>
          <Text style={styles.switchText}>Немає аккаунту? Створити новий_</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontFamily: retroTheme.fonts.mono, fontWeight: 'bold', fontSize: 18, marginBottom: 25, textAlign: 'center' },
  label: { fontFamily: retroTheme.fonts.mono, fontSize: 12, marginBottom: 6, color: retroTheme.colors.dark, fontWeight: 'bold' },
  input: { borderWidth: 3, borderColor: retroTheme.colors.dark, padding: 12, marginBottom: 15, fontFamily: retroTheme.fonts.mono, backgroundColor: '#FFF' },
  switchText: { fontFamily: retroTheme.fonts.mono, fontSize: 12, textDecorationLine: 'underline', color: retroTheme.colors.dark }
});