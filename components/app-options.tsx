import { View } from "react-native";
import { Button, ButtonText } from "./ui/button";
import { Ionicons } from "@expo/vector-icons";
import { Dispatch, SetStateAction, useState } from "react";
import EmojiList from "./emoji-list";

export default function({ setShowAppOptions } : {
    setShowAppOptions : Dispatch<SetStateAction<boolean>>
}) {
    const [visible, setVisible] = useState(false)

    const resetApp = () => {
        alert("hello yp");
        setShowAppOptions(false)
    }

    return (
        <View>
            <View className="flex flex-row gap-10 items-center">
                <IconButton name="Reset" icon="refresh-outline" onPress={resetApp}/>
                <ModalViewButton setVisible={setVisible}/>
                <IconButton name="Save" icon="download-outline" onPress={() => {}}/>
            </View>
            <EmojiList visible={visible} setVisible={setVisible}/>
        </View>

    )
}

function ModalViewButton( { setVisible } : {
    setVisible : Dispatch<SetStateAction<boolean>>
}) {
    return (
        <View className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center">
            <View className="bg-[#25292e] w-20 h-20 rounded-full flex items-center justify-center">
                <Button onPress={() => setVisible(true)} className="w-16 h-16 rounded-full" variant="solid" action="secondary">
                    <ButtonText className="text-5xl">+</ButtonText>
                </Button>
            </View>
        </View>
    )
}

interface IconButtonProps {
    name : string,
    icon : any,
    onPress : () => void
}

function IconButton({ name, icon, onPress } : IconButtonProps) {
    return (
        <Button variant="link" action="secondary" className="flex flex-col" onPress={onPress}>
            <View>
                <Ionicons name={icon} size={20} color={"white"}/>
            </View>
            <ButtonText>{name}</ButtonText>
        </Button>
    )
}