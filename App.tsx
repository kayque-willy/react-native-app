import React from "react";
import { QueryClientProvider } from "react-query";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

import 'react-native-gesture-handler';
import THEME from "./src/theme";
import { queryClient } from "./src/services/queryClient";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={THEME}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
