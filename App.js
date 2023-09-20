import {useFonts} from "expo-font";
import "./src/utils/igonreWarning";

import RootNav from "./src/routes/root";
import {UserProvider} from "./src/contexts";
import Toast from 'react-native-toast-message'


export default function App() {

    const [fontsLoaded] = useFonts({
        "Poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
        "Poppins-med": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
        "Poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
        Poppins: require("./assets/fonts/Poppins-Regular.otf"),
        "DMSans-black": require("./assets/fonts/DMSans-Black.ttf"),
        "DMSans-med": require("./assets/fonts/DMSans-Medium.ttf"),
        "DMSans-light": require("./assets/fonts/DMSans-Light.ttf"),
        "DMSans-bold": require("./assets/fonts/DMSans-Bold.ttf"),
        DMSans: require("./assets/fonts/DMSans-Regular.ttf"),
        "Lexend-black": require("./assets/fonts/Lexend-Black.ttf"),
        "Lexend-med": require("./assets/fonts/Lexend-Medium.ttf"),
        "Lexend-light": require("./assets/fonts/Lexend-Light.ttf"),
        "Lexend-bold": require("./assets/fonts/Lexend-Bold.ttf"),
        Lexend: require("./assets/fonts/Lexend-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <>
            <UserProvider>
                <RootNav/>
            </UserProvider>
            <Toast position='bottom' />
        </>
    );
};
