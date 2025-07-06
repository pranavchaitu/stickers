import { Modal, Text, View } from "react-native";
import { Button } from "./ui/button";
import { SetStateAction, Dispatch } from "react";

export default function({ visible,setVisible } : {
    visible : boolean,
    setVisible : Dispatch<SetStateAction<boolean>>
}) {
    return (
        <View>
            <Modal visible={visible} animationType="slide" transparent={true}>
                <View className="bg-white absolute bottom-0 w-full pb-10">
                    <View className="flex flex-col gap-4">
                        <View className="flex flex-row justify-between items-center mx-4">
                            <Text>Choose a emoji</Text>
                            <Button variant="link" onPress={() => setVisible(false)}>
                                <Text className="text-lg">x</Text>
                            </Button>
                        </View>
                        <View className="flex flex-row justify-around">
                            <Text>😃</Text>
                            <Text>🎌</Text>
                            <Text>🏳️‍🌈</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}