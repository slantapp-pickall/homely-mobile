// import { CSSProperties, FC, ReactNode, useEffect } from "react";
import { SafeAreaView, StyleProp, StyleSheet, ViewProps, ViewStyle, View, StatusBar, Platform } from "react-native";
import {WHITE, WIDTH} from "../theme"


const ScreenView = ({children, style, center, top, home, dark, transparent, bgColor}) => {

    return(
        <>
            <StatusBar
                barStyle={dark ? "light-content" : "dark-content"}
                backgroundColor={bgColor ? bgColor : dark ? "black" :  "transparent"}
                translucent={transparent}/>
            <SafeAreaView style={[center ? styles.center : styles.container,
                top ? {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null} : null, style
            ]}>
                {children}
            </SafeAreaView>
        </>
    );
};


export default ScreenView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH,
        backgroundColor: WHITE,
    },
    center: {
        flex: 1,
        width: WIDTH,
        backgroundColor: WHITE,
        alignItems: "center",
        justifyContent: "center",
    }
});

