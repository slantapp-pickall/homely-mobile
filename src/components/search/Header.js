import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";

function Header({navigation, title, style}) {
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity
                activeOpacity={0.65}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require("../../../assets/icons/arrow_lef.png")}
                    style={{tintColor: "#000", width: 18, height: 18}} resizeMode={"contain"}
                />
            </TouchableOpacity>

            <Text style={styles.txt}>{title}</Text>

            <View/>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
    },
    txt: {
        fontSize: 15,
        fontWeight: "700",
    }
})
