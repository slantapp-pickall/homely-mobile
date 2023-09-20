import React from 'react';
// import ComponentsStyles from "../../constants/ComponentsStyles";
import {BlurView} from "expo-blur";

const BlurBG = ({style}) => {
    return (
        <BlurView
            style={{
                ...style,
                overflow: 'hidden',
                // ...ComponentsStyles.borderRadius.topRadius,
                backgroundColor: `rgba(255,255,255,0)`
                // backgroundColor: theme.rgbaWhiteComponents,
            }}
            intensity={30}
        />
    );
};

export default BlurBG;
