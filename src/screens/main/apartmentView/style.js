import {HEIGHT, PRIMARY_COLOR, WHITE, WIDTH} from "../../../global/theme";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        flex: 1,
        backgroundColor: WHITE,
        padding: 25,
        paddingTop: 20,
        alignItems: "center",
        // justifyContent: "center",
    },
    footerView: {
        position: "absolute",
        bottom: 10,
        height: WIDTH * 0.65,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    itemView: {
        marginHorizontal: 15,
        borderWidth: 2,
        borderColor: WHITE,
        borderRadius: 10,
        height: "60%",
        width: "53%",
        marginBottom: 20
    },
    footerView1: {
      width: "100%",
      height: "100%",
      flexDirection: "row"
    },
    itemImage: {
        width: WIDTH * 0.3,
        height: WIDTH * 0.5,
        borderRadius: 10,
        marginHorizontal: 5,
        borderWidth: 3,
        borderColor: WHITE,
    },
    dot: {
        backgroundColor: WHITE,
        width: 8, height: 8,
        borderRadius: 30,
        marginBottom: 20,
        marginHorizontal: 5,
    }
});
