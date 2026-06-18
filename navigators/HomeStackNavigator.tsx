import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from "@/screens/categoriesScreen";
import BooksScreen from "@/screens/booksScreen";
import BookDetailsScreen from "@/screens/bookDetailsScreen";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen}/>
            <Stack.Screen name="Books" component={BooksScreen}/>
            <Stack.Screen name="BookDetails" component={BookDetailsScreen}/>
        </Stack.Navigator>
    )
}