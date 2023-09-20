import {GREY, PRIMARY_COLOR, WHITE, WIDTH} from "../../../global/theme";
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
        width: "100%",
        flex: 1,
        padding: 35,
        marginTop: 20
    },
    rowView: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row"
    },
    rowViewN: {
        alignItems: "center",
        flexDirection: "row"
    },
    rowViewS: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    btn: {
        backgroundColor: GREY,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        padding: 20,
        marginLeft: 20
    }

});
