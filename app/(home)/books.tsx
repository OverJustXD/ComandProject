import {router, useLocalSearchParams, useRouter} from "expo-router";
import {View, Text, Pressable, Image, FlatList, useWindowDimensions} from "react-native";
import {retroStyles, retroTheme} from "@/constants/retroStyles";
import React from "react";
import {books, type Book} from "@/data/books";

export default function BooksScreen() {
    const {category} = useLocalSearchParams<{category?: string}>();
    const {width} = useWindowDimensions();
    const router = useRouter();
    const columns = width < 768 ? 1 : 3;

    const normalizedCategory = category?.toString().toLowerCase();

    const booksByCategory = books.filter((book) => book.category.toLowerCase() === normalizedCategory);

    const renderItem = ({item}: {item: Book}) => (
        <Pressable style={retroStyles.bookCard} onPress={() => router.push({
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
            <Image source={{uri: item.cover}} style={ retroStyles.cover } resizeMode="cover"/>

            <Text style={ retroStyles.title }>
                {item.title}
            </Text>

            <Text style={ retroStyles.author }>
                {item.author}
            </Text>

            <Text style={retroStyles.shortDescription} numberOfLines={3}>
                {item.shortDescription}
            </Text>
        </Pressable>
    );

    return(
        <View style={retroStyles.container}>
            <Pressable onPress={() => router.back()} style={[retroStyles.brutalButton, {marginBottom: 20}]}>
                <Text>Назад</Text>
            </Pressable>

            <View style={retroStyles.dashedLine} />
            <Text style={{ fontFamily: retroTheme.fonts.mono, fontWeight: 'bold', fontSize: 18, textAlign: "center" }}>
                {`> Категорія: ${category ?? "Unknown"} <`}
            </Text>
            <View style={retroStyles.dashedLine} />

            <FlatList
                data={booksByCategory}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={columns}
                columnWrapperStyle={columns > 1 ? retroStyles.row : undefined}
                contentContainerStyle={retroStyles.listContent}
                ListEmptyComponent={
                    <Text style={retroStyles.emptyText}>
                        Для цієї категорії немає книг.
                    </Text>
                }
            />
        </View>
    )
}