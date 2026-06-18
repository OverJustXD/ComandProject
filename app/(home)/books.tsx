import {useLocalSearchParams, useRouter} from "expo-router";
import {View, Text, Pressable} from "react-native";


export default function BooksScreen() {
    const {category} = useLocalSearchParams<{category?: string}>();
    const router = useRouter();

    return(
        <View>
            <Text>Категорія: {category}</Text>

            <Pressable onPress={() => router.push('/(home)/book/[id]')}>
                <Text>Відкрити книгу</Text>
            </Pressable>
        </View>
    )
}