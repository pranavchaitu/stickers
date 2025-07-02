import { View } from "react-native";
import ImageViewer from "@/components/image-viewer";

export default function() {
  return (
    <View className="flex-1 items-center bg-[#25292e]">
      <ImageViewer imageUrl="https://docs.expo.dev/static/images/tutorial/background-image.png"/>
    </View>
  );
}
