import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { retroStyles, retroTheme } from '../constants/retroStyles';
import { useAuth } from '../context/_authContext';

export default function ProfileScreen() {
  const { user } = useAuth();

  const activeUser = user || { name: "Анонім", email: "none@space.ua", status: "Гість" };

  return (
    <ScrollView style={retroStyles.container} contentContainerStyle={styles.content}>
      
      <View style={styles.terminalHeader}>
        <Text style={styles.terminalText}>&gt; PROFILE_STATUS: ACTIVE</Text>
      </View>

      <View style={retroStyles.brutalCard}>
        <View style={styles.avatarFrame}>
          <Image 
            source={{ uri: `https://api.dicebear.com/7.x/pixel-art/png?seed=${activeUser.name}` }} 
            style={styles.avatar} 
          />
        </View>

        <Text style={styles.label}>ІМ'Я КОРИСТУВАЧА:</Text>
        <Text style={styles.value}>{activeUser.name}</Text>
        
        <View style={retroStyles.dashedLine} />

        <Text style={styles.label}>Е-ПОШТА:</Text>
        <Text style={styles.value}>{activeUser.email}</Text>
      </View>

      <View style={[retroStyles.brutalCard, { backgroundColor: retroTheme.colors.secondary, marginTop: 20 }]}>
        <Text style={styles.statsTitle}>[ СИСТЕМНИЙ ЛОГ ]</Text>
        <Text style={styles.statsText}>• РАНГ: {activeUser.status}</Text>
        <Text style={styles.statsText}>• АВТОРИЗАЦІЯ: SUCCESSFUL</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20 },
  terminalHeader: { backgroundColor: retroTheme.colors.dark, padding: 10, marginBottom: 20, borderWidth: 2, borderColor: retroTheme.colors.dark },
  terminalText: { color: retroTheme.colors.terminalGreen, fontFamily: retroTheme.fonts.mono, fontSize: 14 },
  avatarFrame: { borderWidth: 3, borderColor: retroTheme.colors.dark, backgroundColor: retroTheme.colors.accent, padding: 8, alignSelf: 'center', marginBottom: 20 },
  avatar: { width: 100, height: 100 },
  label: { fontSize: 11, color: retroTheme.colors.muted, fontFamily: retroTheme.fonts.mono, marginBottom: 2 },
  value: { fontSize: 18, fontWeight: 'bold', color: retroTheme.colors.dark, fontFamily: retroTheme.fonts.mono, marginBottom: 10 },
  statsTitle: { fontWeight: 'bold', fontFamily: retroTheme.fonts.mono, marginBottom: 5 },
  statsText: { fontFamily: retroTheme.fonts.mono, fontSize: 13, marginBottom: 3 }
});