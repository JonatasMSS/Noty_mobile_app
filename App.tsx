import Home from "@screens/Home";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import {
  useFonts,
  K2D_600SemiBold,
  K2D_700Bold,
  K2D_300Light,
  K2D_400Regular_Italic,
} from "@expo-google-fonts/k2d";
import { Routes } from "@routes/index";
import NotePage from "@screens/Note";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    K2D_600SemiBold,
    K2D_300Light,
    K2D_400Regular_Italic,
    K2D_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent style="light" />
      <Routes />
    </View>
  );
}
