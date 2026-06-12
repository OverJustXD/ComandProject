import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { retroStyles, retroTheme } from '../constants/retroStyles';

export default function HomeScreen() {
  return (
    <ScrollView style={retroStyles.container} contentContainerStyle={{ padding: 20 }}>
      <View style={retroStyles.brutalCard}>
        <Text style={{ fontFamily: retroTheme.fonts.mono, fontWeight: 'bold', fontSize: 18 }}>
          {"> BOOKSPACE_HOME"}
        </Text>
        
        <View style={retroStyles.dashedLine} />
        
        <Text style={{ fontFamily: retroTheme.fonts.mono }}>
          Тут колеги зроблять Stack Navigation: Категорії → Список книг → Деталі.
        </Text>
      </View>
    </ScrollView>
  );
}