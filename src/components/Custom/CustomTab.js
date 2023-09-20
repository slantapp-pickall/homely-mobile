import React from 'react';
import {TouchableOpacity, View, Text, Image} from "react-native";
import {GREY, GREY1, GREY2, PRIMARY_COLOR, WHITE, WIDTH} from "../../global/theme";
import {Gilroy_bold, Gilroy_semi_bold, Lexend, Poppins, Poppins_bold} from "../../constants/font";

function CustomTab({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const icon = options.icon;

                const isFocused = state.index === index;

                const onPress = () => {
                    // console.log(`name: ${route.name}`)
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        activeOpacity={0.77}
                        style={{ flex: 1, alignItems: "center", backgroundColor: WHITE, paddingVertical: 18  }}
                    >
                        <Text style={{ color: isFocused ? "#000" : GREY2, fontSize: isFocused ? 17 : 16, fontFamily: Poppins_bold }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default CustomTab;
