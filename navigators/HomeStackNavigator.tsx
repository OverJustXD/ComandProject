import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from "@/app/(home)";
import BooksScreen from "@/app/(home)/books";
import BookDetailsScreen from "@/app/(home)/book/[id]";

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