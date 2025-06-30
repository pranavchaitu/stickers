import { Button, Text, View } from "react-native";
import { Link } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";

export default function() {
  return (
    <View className="flex-1 items-center justify-center bg-[#25292e]">
      <Text className="text-white">this is home page</Text>
      {/* <Link href={'/about'}> */}
        <Button title="click to go to about page" onPress={() => navigate('/about')}/>
      {/* </Link> */}
    </View>
  );
}
