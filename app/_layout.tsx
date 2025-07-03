import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name='index' options={{title : "Home"}}/>
        <Stack.Screen name='(tabs)' options={{headerShown : false}}/>
      </Stack>
    </GluestackUIProvider>
  );  
}
