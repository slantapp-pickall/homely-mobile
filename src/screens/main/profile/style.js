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
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginVertical: 35
    },
    view11: {
        marginTop: 20,
        width: "100%",
        padding: 20,
    },
    rowViewS: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        marginBottom: 20
    },
    rowView: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
    }
});
