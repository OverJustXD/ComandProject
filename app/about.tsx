import React from 'react';
import { Text, View } from 'react-native';
import { retroStyles, retroTheme } from '../constants/retroStyles';

export default function AboutScreen() {
  return (
    <View style={[retroStyles.container, { padding: 20 }]}>
      <View style={[retroStyles.brutalCard, { backgroundColor: retroTheme.colors.accent }]}>
        <Text style={{ fontFamily: retroTheme.fonts.mono, fontWeight: 'bold' }}>[ ПРО ЗАСТОСУНОК ]</Text>
      </View>
    </View>
  );
}