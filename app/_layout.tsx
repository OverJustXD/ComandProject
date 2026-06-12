import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useRootNavigationState, useRouter, useSegments } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { retroTheme } from '../constants/retroStyles';
import { AuthProvider, useAuth } from '../context/_authContext';

function CustomDrawerContent(props: any) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Система", "Ви впевнені, що хочете закрити сесію BOOKSPACE_OS?", [
      { text: "Скасувати", style: "cancel" },
      { text: "Вийти", style: "destructive", onPress: () => {
          logout();
          router.replace('/login');
        } 
      }
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: retroTheme.colors.bg }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{ uri: `https://api.dicebear.com/7.x/pixel-art/png?seed=${user?.name || 'Guest'}` }} 
              style={styles.drawerAvatar} 
            />
          </View>
          <Text style={styles.drawerUsername}>{user?.name || 'Гість_ОС'}</Text>
          <Text style={styles.drawerSystemText}>{user?.email || 'OFFLINE'}</Text>
        </View>

        <View style={styles.divider} />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>[ ВИЙТИ З СИСТЕМИ ]</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DrawerLayoutContent() {
  const { user } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === 'login' || segments[0] === 'register';

    const redirectTimer = setTimeout(() => {
      if (!user && !inAuthGroup) {
        router.replace('/login');
      } else if (user && inAuthGroup) {
        router.replace('/');
      }
    }, 0);

    return () => clearTimeout(redirectTimer);
  }, [user, segments, navigationState?.key]);

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: retroTheme.colors.dark,
          borderBottomWidth: 3,
          borderBottomColor: retroTheme.colors.dark,
        },
        headerTintColor: '#FFF',
        headerTitleStyle: { fontFamily: retroTheme.fonts.mono, fontWeight: 'bold' },
        drawerActiveBackgroundColor: retroTheme.colors.accent,
        drawerActiveTintColor: retroTheme.colors.dark,
        drawerLabelStyle: { fontFamily: retroTheme.fonts.mono, fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="index" options={{ drawerLabel: 'Головна' }} />
      <Drawer.Screen name="favorites" options={{ drawerLabel: 'Улюблені книги' }} />
      <Drawer.Screen name="profile" options={{ drawerLabel: 'Профіль користувача' }} />
      <Drawer.Screen name="about" options={{ drawerLabel: 'Про застосунок' }} />
      
      <Drawer.Screen name="login" options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
      <Drawer.Screen name="register" options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
    </Drawer>
  );
}

export default function Layout() {
  return (
    <AuthProvider>
      <DrawerLayoutContent />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  drawerHeader: { padding: 20, alignItems: 'center', backgroundColor: '#E6DFCD', borderBottomWidth: 3, borderColor: retroTheme.colors.dark },
  avatarBorder: { borderWidth: 2, borderColor: retroTheme.colors.dark, backgroundColor: retroTheme.colors.secondary, padding: 4, marginBottom: 10 },
  drawerAvatar: { width: 60, height: 60 },
  drawerUsername: { fontFamily: retroTheme.fonts.mono, fontWeight: 'bold', fontSize: 15, color: retroTheme.colors.dark },
  drawerSystemText: { fontFamily: retroTheme.fonts.mono, fontSize: 10, color: retroTheme.colors.muted },
  divider: { height: 3, backgroundColor: retroTheme.colors.dark, marginVertical: 10 },
  footerContainer: { padding: 20, borderTopWidth: 3, borderColor: retroTheme.colors.dark, backgroundColor: '#E6DFCD' },
  logoutButton: { backgroundColor: '#BA1A1A', padding: 12, borderWidth: 2, borderColor: retroTheme.colors.dark, alignItems: 'center' },
  logoutText: { color: '#FFF', fontWeight: 'bold', fontFamily: retroTheme.fonts.mono }
});