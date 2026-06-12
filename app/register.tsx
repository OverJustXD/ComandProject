import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { retroStyles, retroTheme } from '../constants/retroStyles';
import { useAuth } from '../context/_authContext';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert("Система", "Помилка: Усі поля мають бути заповнені!");
      return;
    }
    if (register(name, email, password)) {
      router.replace('/');
    } else {
      Alert.alert("Система", "Помилка: Користувач з такою поштою вже є в базі.");
    }
  };

  return (
    <View style={[retroStyles.container, styles.center]}>
      <View style={[retroStyles.brutalCard, { width: '90%' }]}>
        <Text style={styles.title}>{"[ РЕЄСТРАЦІЯ ОПЕРАТОРА ]"}</Text>
        
        <Text style={styles.label}>ІМ'Я ЧИТАЧА:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Retro_Gamer" placeholderTextColor="#A0A0A0" />

        <Text style={styles.label}>Е-ПОШТА:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="worm@space.ua" placeholderTextColor="#A0A0A0" autoCapitalize="none" />

        <Text style={styles.label}>ПАРОЛЬ ДЛЯ СЕСІЇ:</Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="••••••" placeholderTextColor="#A0A0A0" />

        <TouchableOpacity style={[retroStyles.brutalButton, { marginTop: 10 }]} onPress={handleRegister}>
          <Text style={retroStyles.buttonText}>ЗАРЕЄСТРУВАТИСЯ_</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20, alignItems: 'center' }} onPress={() => router.push('/login')}>
          <Text style={styles.switchText}>Вже є в базі? Авторизуватись_</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontFamily: retroTheme.fonts.mono, fontWeight: 'bold', fontSize: 16, marginBottom: 25, textAlign: 'center' },
  label: { fontFamily: retroTheme.fonts.mono, fontSize: 12, marginBottom: 6, color: retroTheme.colors.dark, fontWeight: 'bold' },
  input: { borderWidth: 3, borderColor: retroTheme.colors.dark, padding: 12, marginBottom: 15, fontFamily: retroTheme.fonts.mono, backgroundColor: '#FFF' },
  switchText: { fontFamily: retroTheme.fonts.mono, fontSize: 12, textDecorationLine: 'underline', color: retroTheme.colors.dark }
});