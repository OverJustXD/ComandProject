import React, {useEffect, useState} from "react";
import {View, Text, Image, ScrollView, Pressable, Alert} from "react-native";
import {router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { retroStyles, retroTheme } from "@/constants/retroStyles";

export default function BookDetailsScreen() {
    const {id, cover, title, author, year, genre, description, rating} = useLocalSearchParams();
    const [isFavorited, setFavorited] = useState(false);

    useEffect(() => {
        checkFavorite();
    })

    const checkFavorite = async () => {
        try{
            const stored = await AsyncStorage.getItem("favorites");
            const favorites = stored ? JSON.parse(stored) : [];

            setFavorited(favorites.some((book: any) => book.id === id));
        }
        catch (error) {
            console.log(error);
        }
    }

    const toggleFavorite = async () => {
        try {
            const stored = await AsyncStorage.getItem("favorites");
            const favorites = stored ? JSON.parse(stored) : [];

            if(isFavorited) {
                const updatedFavorites = favorites.filter((book: any) => book.id !== id);

                await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));

                setFavorited(false);
            } else{
                const newBook = {
                    id, cover, title, author, year, genre, description, rating
                };

                await AsyncStorage.setItem("favorites", JSON.stringify([...favorites, newBook]));

                setFavorited(true);
            }

            Alert.alert(
                "BOOKSPACE_OS",
                isFavorited
                    ? "Книгу видалено з улюблених."
                    : "Книгу додано до улюблених."
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView style={retroStyles.container} contentContainerStyle={{ padding: 20 }}>
            <Pressable onPress={() => router.back()} style={[retroStyles.brutalButton, {marginBottom: 20}]}>
                <Text>Назад</Text>
            </Pressable>
            <View style={retroStyles.brutalCard}>
                <Text style={{fontFamily: retroTheme.fonts.mono, fontWeight: "bold", fontSize: 22, textAlign: "center"}}>
                    {"> BOOK_DETAILS <"}
                </Text>

                <View style={retroStyles.dashedLine} />

                <View style={retroStyles.bookDetailsContainer}>
                    <View style={retroStyles.bookDetailsLeft}>
                        <Image source={{ uri: cover as string }} style={retroStyles.bookDetailsCover}/>

                        <Pressable style={[retroStyles.brutalButton, retroStyles.favoriteButton, isFavorited && retroStyles.favoriteButtonActive]} onPress={toggleFavorite}>
                            <Text style={retroStyles.buttonText}>
                                {isFavorited ? '- ВИДАЛИТИ З УЛЮБЛЕНИХ' : '+ ДОДАТИ В УЛЮБЛЕНІ'}
                            </Text>
                        </Pressable>
                    </View>

                    <View style={retroStyles.bookDetailsRight}>
                        <Text style={retroStyles.bookDetailsTitle}>
                            {title}
                        </Text>

                        <Text style={retroStyles.bookDetailsAuthor}>
                            {author}
                        </Text>

                        <View style={retroStyles.dashedLine} />

                        <Text style={retroStyles.bookDetailsInfo}>
                            Рік видання: {year}
                        </Text>

                        <Text style={retroStyles.bookDetailsInfo}>
                            Жанр: {genre}
                        </Text>

                        <Text style={retroStyles.bookDetailsInfo}>
                            Рейтинг: {rating}
                        </Text>

                        <View style={retroStyles.dashedLine} />

                        <Text style={retroStyles.bookDetailsSectionTitle}>
                            Опис
                        </Text>

                        <Text style={retroStyles.bookDetailsDescription}>
                            {description}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}