import React from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { retroStyles, retroTheme } from '@/constants/retroStyles';
import {useRouter} from "expo-router";

export default function CategoriesScreen() {
  const router = useRouter();

  return (
    <ScrollView style={retroStyles.container} contentContainerStyle={{ padding: 20 }}>
      <View style={retroStyles.brutalCard}>
        <Text style={{ fontFamily: retroTheme.fonts.mono, fontWeight: 'bold', fontSize: 18 }}>
          {"> BOOKSPACE_HOME"}
        </Text>
        <View style={retroStyles.dashedLine} />
        <Text style={{ fontFamily: retroTheme.fonts.mono, fontWeight: 'bold', fontSize: 18, textAlign: "center" }}>
          {"> CATEGORIES <"}
        </Text>
        <View style={retroStyles.categories} >
          <Pressable onPress={() => router.push('/(home)/books?category=Фантастика')} style={retroStyles.category}>
            <Text style={{fontFamily: retroTheme.fonts.mono, fontSize: 20}}>Фантастика</Text>
          </Pressable>
          <Pressable onPress={() => router.push('/(home)/books?category=Детективи')} style={retroStyles.category}>
            <Text style={{fontFamily: retroTheme.fonts.mono, fontSize: 20}}>Детективи</Text>
          </Pressable>
          <Pressable onPress={() => router.push('/(home)/books?category=Історичні_романи')} style={retroStyles.category}>
            <Text style={{fontFamily: retroTheme.fonts.mono, fontSize: 20}}>Історичні романи</Text>
          </Pressable>
          <Pressable onPress={() => router.push('/(home)/books?category=Саморозвиток')} style={retroStyles.category}>
            <Text style={{fontFamily: retroTheme.fonts.mono, fontSize: 20}}>Саморозвиток</Text>
          </Pressable>
          <Pressable onPress={() => router.push('/(home)/books?category=Біографії')} style={retroStyles.category}>
            <Text style={{fontFamily: retroTheme.fonts.mono, fontSize: 20}}>Біографії</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}