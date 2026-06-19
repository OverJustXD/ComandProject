import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import { retroStyles, retroTheme } from '@/constants/retroStyles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {type Book} from "@/data/books";
import {router} from "expo-router";

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useState<Book[]>([]);

    const loadFavorites = async () => {
        try{
            const stored = await AsyncStorage.getItem('favorites');
            if(stored){
                const favorites = stored ? JSON.parse(stored) : [];
                setFavorites(favorites);
            } else{
                setFavorites([]);
            }
        }catch(e){
            console.error(e);
        }
    }

    useEffect(() => {
        loadFavorites();
    }, [])

    const renderItem = ({item}: {item: Book}) => (
        <Pressable style={retroStyles.favoriteRowCard} onPress={() => router.push({
            pathname: "/(home)/book/[id]",
            params: {
                id: item.id,
                cover: item.cover,
                title: item.title,
                author: item.author,
                shortDescription: item.shortDescription,
                category: item.category,
                year: item.year,
                genre: item.genre,
                description: item.description,
                rating: item.rating,
            },
        })
        }
        >
            <Image source={{uri: item.cover}} style={ retroStyles.favoriteRowCover } resizeMode="cover"/>

            <View style={retroStyles.favoriteRowInfo}>
                <Text style={ retroStyles.favoriteRowTitle } numberOfLines={2}>
                    {`| ${item.title} |`}
                </Text>

                <Text style={ retroStyles.favoriteRowAuthor } numberOfLines={1}>
                    {`| ${item.author} |`}
                </Text>

                <Text style={retroStyles.favoriteRowYear }>
                    {`| ${item.year} |`}
                </Text>
            </View>
        </Pressable>
    );

  return (
    <View style={[retroStyles.container, { padding: 20 }]}>
      <View style={retroStyles.brutalCard}>
        <Text style={{ fontFamily: retroTheme.fonts.mono, fontWeight: 'bold' }}>[ УЛЮБЛЕНІ КНИГИ ]</Text>
      </View>
        <View style={retroStyles.brutalCard}>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={retroStyles.listContent}
                ListEmptyComponent={
                    <Text style={retroStyles.emptyText}>
                        Улюблених книг поки немає.
                    </Text>
                }
            />
        </View>
    </View>
  );
}