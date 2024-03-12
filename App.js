import "react-native-gesture-handler"
import "react-native-reanimated";

//Components
import { Routes } from "./src/Routes/Routes";

//Funciones y Providers
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PaperProvider>
          <StatusBar style="auto"/>
          <Routes />
        </PaperProvider>
      </Provider>
    </QueryClientProvider>
  );
}
