import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../constants/Colors';

const FilledButton = ({ onPress, title, disabled, style }: any) => {
    const { filledButton, buttonContentView, buttonTitleText } = styles;
    return <TouchableRipple disabled={disabled} onPress={onPress} style={[filledButton, style, {
        opacity: disabled ? 0.5 : 1
    }]}>
        <View style={[buttonContentView]}>
            <Text style={buttonTitleText}>{title}</Text>
        </View>
    </TouchableRipple>
}

const styles = StyleSheet.create({
    filledButton: {
        height: wp(12),
        width: wp(80),
        backgroundColor: Colors.dark.primary,
        borderRadius: wp(1.5)
    },
    buttonContentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitleText: {
        color: "#ffffff",
        fontSize: wp(3),
        fontFamily: 'bold'
    }
});

export { FilledButton };