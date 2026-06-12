import React from 'react';
import { Text, View } from 'react-native';
import { retroStyles, retroTheme } from '../constants/retroStyles';

export default function FavoritesScreen() {
  return (
    <View style={[retroStyles.container, { padding: 20 }]}>
      <View style={retroStyles.brutalCard}>
        <Text style={{ fontFamily: retroTheme.fonts.mono, fontWeight: 'bold' }}>[ УЛЮБЛЕНІ КНИГИ ]</Text>
      </View>
    </View>
  );
}