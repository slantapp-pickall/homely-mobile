import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GREY1, GREY2, HEIGHT, LIGHT_PRIMARY, PRIMARY_COLOR, SECONDARY_COLOR, WHITE, WIDTH} from "../../global/theme";
import Icon from "@expo/vector-icons/Ionicons";
import {DMSans, DMSans_bold, DMSans_medium} from "../../constants/font";

export const Header = ({history, navigation, onPress, title, style, noRightBtn}) => {
    return (
        <View style={[styles.container, style]}>
            {
                title ?
                    <View style={{height: HEIGHT * 0.13, alignItems: "center", flexDirection: "row"}}>
                        <View style={styles.line} />
                        <Text style={styles.text1}>
                            {title}
                        </Text>
                    </View>
                    :
                    <TouchableOpacity
                        activeOpacity={0.55}
                        onPress={() => navigation.goBack()}
                        style={{padding: 10}}
                    >
                        <Image
                            source={require("../../../assets/icons/arrow_lef.png")}
                            style={[{width: 20, height: 20}, noRightBtn ? {marginTop: HEIGHT * 0.05} : null ]}
                            resizeMode={"contain"}
                        />
                    </TouchableOpacity>
            }

            {
                !noRightBtn &&
                    <TouchableOpacity
                        style={styles.btnView1}
                        activeOpacity={0.6}
                        onPress={() => {
                            if(title) {
                                navigation.navigate("search-screen")
                            }
                        }}
                    >
                        <View style={styles.btnView}>
                            <Image
                                source={
                                    title ? require("../../../assets/icons/search.png") :
                                        require("../../../assets/icons/heart.png")
                                }
                                   style={{width: 20, height: 20}} />
                        </View>
                    </TouchableOpacity>
            }
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    line: {
      height: "100%",
      width: 5,
      backgroundColor: "#000",
      borderRadius: 10,
        marginRight: 15
    },
    text1: {
        fontSize: 20,
        // fontWeight: "700",
        width: WIDTH * 0.38,
        lineHeight: 30,
        fontFamily: DMSans_bold
    },
    text2: {
        marginBottom: 10,
        fontSize: 18,
        lineHeight: 20
    },
    btnView: {
        padding: 10,
        borderRadius: 100,
        backgroundColor: WHITE,
        height: HEIGHT * 0.1,
        alignItems: "center",
        justifyContent: "center"
    },
    btnView1: {
        padding: 8,
        marginVertical: 10,
        borderRadius: 100,
        backgroundColor: GREY1,
        height: HEIGHT * 0.115,
        alignItems: "center",
        justifyContent: "center"
    },
    rowView: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row"
    }
})
