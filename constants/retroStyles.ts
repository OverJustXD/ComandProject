import { StyleSheet, Platform } from 'react-native';

export const retroTheme = {
  colors: {
    bg: '#F3EFE0',       
    cardBg: '#FFFFFF',   
    accent: '#FFDE4D',   
    secondary: '#FFB26B',
    dark: '#1A1A1A',     
    terminalGreen: '#00FF66', 
    muted: '#7F7F7F'     
  },
  fonts: {
    mono: Platform.OS === 'ios' ? 'Courier' : 'monospace'
  }
};

export const retroStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: retroTheme.colors.bg,
  },
  brutalCard: {
    backgroundColor: retroTheme.colors.cardBg,
    borderWidth: 3,
    borderColor: retroTheme.colors.dark,
    padding: 20,
    shadowColor: retroTheme.colors.dark,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  brutalButton: {
    backgroundColor: '#3D5154',
    borderWidth: 3,
    borderColor: retroTheme.colors.dark,
    padding: 15,
    alignItems: 'center',
    shadowColor: retroTheme.colors.dark,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: retroTheme.fonts.mono,
  },
  dashedLine: {
    borderWidth: 1,
    borderColor: retroTheme.colors.dark,
    borderStyle: 'dashed',
    marginVertical: 15,
  },
  categories:{
    alignItems:'center',
    gap: 10,
  },
  category:{
    backgroundColor: '#fdf1a9',
    borderWidth: 3,
    borderColor: retroTheme.colors.dark,
    padding: 15,
    alignItems: 'center',
    shadowColor: retroTheme.colors.dark,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    width: '75%',
  }
});