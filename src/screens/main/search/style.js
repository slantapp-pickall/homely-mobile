import {GREY3, HEIGHT, PRIMARY_COLOR, WHITE, WIDTH} from "../../../global/theme";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        flex: 1,
        backgroundColor: "#fcfcfc",
        // padding: 25,
        paddingTop: 20,
    },
    view1: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        marginTop: 20
    },
    view11: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 20,
        paddingHorizontal: 25,
    },
    rowView: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    rowViewS: {
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10
    },
    input: {
        flexDirection: "row",
        width: "85%", alignItems: "center",
    },
    btn: {
        backgroundColor: PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
    },
    text1: {
        color: "#000",
        fontSize: 12,
    },
    text2: {
        color: GREY3,
        fontSize: 12,
    },
    icon: {
        width: 17,
        height: 17,
    },
    view12: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        marginTop: 20
    },
    itemContainer: {
        width: "42%",
        height: HEIGHT * 0.25,
        backgroundColor: WHITE,
        marginVertical: 10,
        marginHorizontal: 20
        // alignItems: "center"
    },
    itemView1: {
        width: "80%",
        alignSelf: "center"
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
