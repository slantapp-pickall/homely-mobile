import {PRIMARY_COLOR, WHITE, WIDTH} from "../../../global/theme";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        flex: 1,
        backgroundColor: WHITE,
        padding: 25,
        paddingTop: 20,
    },
    view1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    floatBtn: {
        width: WIDTH * 0.12,
        height: WIDTH * 0.12,
        borderRadius: 150,
        backgroundColor: PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        position: "absolute",
        bottom: 10,
        right: 10
    }
});
