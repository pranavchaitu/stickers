import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function() {
    return <View className="flex-1 items-center justify-center">
        <Text>
            chill. page not wrote by the developer
        </Text>
        <Link href={'/'}>
            go back to home
        </Link>
    </View>
}