import {Stack} from 'expo-router'

export const unstable_settings = {
    initialRouteName: 'index',
}

export default function HomeLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Категорії' }}/>
            <Stack.Screen name="books" options={{ title: 'Список книг' }}/>
            <Stack.Screen name="book/[id]" options={{ title: 'Деталі книги' }}/>
        </Stack>
    )
}