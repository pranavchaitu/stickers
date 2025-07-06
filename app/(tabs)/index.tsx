import { View } from "react-native";
import ImageViewer from "@/components/image-viewer";
import { Button, ButtonText } from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import { Toast, ToastDescription, ToastTitle, useToast } from "@/components/ui/toast";
import * as ImagePicker from "expo-image-picker"
import { useState } from "react";
import AppOptions from "@/components/app-options";

export default function Index() {
  const toast = useToast()
  const [image,setImage] = useState<string>("")
  const [showAppOptions, setShowAppOptions] = useState(false)

  const showToastWithText = (text : string) => {
    toast.show({
      duration : 1000,
      placement : "top",
      render : ({ id }) => (
        <Toast className={id == '1' ? "mt-20" : "mt-0"} nativeID={"toast"+id} action="success">
          <ToastDescription>{text}</ToastDescription>
        </Toast>
      )
    })
  }

  const pickImageAsync = async () => {
    let result  = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : "images",
      quality : 1,
      allowsEditing : true
    }) 

    if(!result.canceled) {
      setImage(result.assets[0].uri)
    } else {
      toast.show({
        duration : 1000,
        placement : "top",
        render : ({ id }) => (
          <Toast className={id == '1' ? "mt-20" : "mt-0"} nativeID={"toast"+id} action="error">
            <ToastDescription>image not selected</ToastDescription>
          </Toast>
        )
      })
    }
  }

  return (
    <View className="flex-1 items-center bg-[#25292e]">
      <ImageViewer imageUrl={image ? image : "https://docs.expo.dev/static/images/tutorial/background-image.png"}/>
      {showAppOptions ? (
        <View>
          <AppOptions setShowAppOptions={setShowAppOptions}/>
        </View>
      ) : (
        <View className="flex gap-3">
          <Button size="lg" variant="solid" action="secondary" onPress={pickImageAsync}>
            <Ionicons name="image-outline" size={24}/>
            <ButtonText className="text-black">
              Choose a photo
            </ButtonText>
          </Button>
          <Button size="lg" variant="link" action="secondary" onPress={() => setShowAppOptions(true)}>
            <ButtonText>Use this photo</ButtonText>
          </Button>
        </View>
      )}
    </View>
  );
}
