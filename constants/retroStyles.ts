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
  },
  row: {
    gap: 10,
    marginBottom: 10,
  },
  listContent: {
    padding: 12,
    paddingBottom: 24,
  },
  bookCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: retroTheme.colors.cardBg,
    borderWidth: 3,
    borderColor: retroTheme.colors.dark,
    padding: 20,
    shadowColor: retroTheme.colors.dark,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
    alignItems: "center",
    marginBottom: 20
  },
  cover: {
    width: "75%",
    aspectRatio: 0.75,
    marginBottom: 8,
  },
  title:{
    fontFamily: retroTheme.fonts.mono,
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 4,
    textAlign: 'center',
  },
  author:{
    fontFamily: retroTheme.fonts.mono,
    fontWeight: "semibold",
    fontSize: 18,
    marginBottom: 4,
    textAlign: 'center',
  },
  shortDescription:{
    fontFamily: retroTheme.fonts.mono,
    fontWeight: "thin",
    fontSize: 14,
    textAlign: 'center',
  },
  emptyText:{
    fontFamily: retroTheme.fonts.mono,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  bookDetailsContainer: {
    flexDirection: "row",
    gap: 20,
  },

  bookDetailsLeft: {
    flex: 1,
    alignItems: "center",
  },

  bookDetailsRight: {
    flex: 2,
  },

  bookDetailsCover: {
    width: "100%",
    aspectRatio: 0.7,
    borderWidth: 3,
    borderColor: retroTheme.colors.dark,
  },

  bookDetailsTitle: {
    fontFamily: retroTheme.fonts.mono,
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },

  bookDetailsAuthor: {
    fontFamily: retroTheme.fonts.mono,
    fontSize: 18,
    marginBottom: 20,
  },

  bookDetailsInfo: {
    fontFamily: retroTheme.fonts.mono,
    fontSize: 16,
    marginBottom: 10,
  },

  bookDetailsSectionTitle: {
    fontFamily: retroTheme.fonts.mono,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },

  bookDetailsDescription: {
    fontFamily: retroTheme.fonts.mono,
    fontSize: 15,
    lineHeight: 24,
  },

  favoriteButton: {
    marginTop: 20,
    width: "100%",
  },

  favoriteButtonActive: {
    backgroundColor: "#E75480",
  },

  favoriteRowCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: retroTheme.colors.cardBg,
    borderWidth: 3,
    borderColor: retroTheme.colors.dark,
    padding: 12,
    marginBottom: 12,
    shadowColor: retroTheme.colors.dark,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },

  favoriteRowCover: {
    width: 56,
    height: 78,
    borderWidth: 2,
    borderColor: retroTheme.colors.dark,
  },

  favoriteRowInfo: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  favoriteRowTitle: {
    fontFamily: retroTheme.fonts.mono,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 4,
  },

  favoriteRowAuthor: {
    fontFamily: retroTheme.fonts.mono,
    fontSize: 16,
    marginBottom: 4,
  },

  favoriteRowYear: {
    fontFamily: retroTheme.fonts.mono,
    fontSize: 16,
  },

  favoriteRowDivider: {
    height: 2,
    backgroundColor: retroTheme.colors.dark,
    marginVertical: 8,
  },
});