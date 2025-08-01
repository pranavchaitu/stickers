import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function() {
    return <Tabs screenOptions={{
        headerStyle : {
            backgroundColor : "#25292e"
        },
        tabBarStyle : {
            backgroundColor : "#25292e"
        },
        headerShadowVisible : false,
        tabBarActiveTintColor : "#ffd33d",
        headerTintColor : "#fff",
    }}>
        <Tabs.Screen 
            name="index" 
            options={{
                title : "Home", 
                tabBarIcon : ({ focused,color }) => (
                    <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24}/>
                )
            }}
        />
        <Tabs.Screen 
            name="about" 
            options={{
                title : "About", 
                tabBarIcon : ({ focused ,color}) => (
                    <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24}/>
                )
            }}
        />
        {/* <Tabs.Screen name="about" options={{ title : "About" }}/> */}
    </Tabs>
}