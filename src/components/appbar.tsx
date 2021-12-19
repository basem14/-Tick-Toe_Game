import React from 'react';

import { Appbar as RNAppbar } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/core';

const Appbar = ({ title, rightActionButtons, initBack }: any) => {

    const navigation = useNavigation();

    const { contanier, titleStyle, rightActionView,LanguageActionView, innerView } = styles;
    return (
        <RNAppbar.Header style={contanier(Colors.dark.primary)}>

            <RNAppbar style={innerView}>
                {initBack && (
                    <RNAppbar.BackAction size={wp(7)} color={"#ffffff"} onPress={() => navigation.pop()} />
                )}
            </RNAppbar>

            <Text style={titleStyle(Colors.dark.text)}>{title}</Text>

            {/* <View style={rightActionView}>
                {rightActionButtons}
            </View>
            */}

        </RNAppbar.Header>
    )
}

const styles = StyleSheet.create({
    contanier: (color: String) => ({
        elevation: 0,
        backgroundColor: color,
        justifyContent: 'center'
    }),
    titleStyle: (color: String) => ({
        fontFamily: "bold",
        fontSize: wp(5),
        textAlign: 'center',
        alignSelf: 'center',
        color,
        flex: 1,
        height: wp(8)
    }),
    rightActionView: {
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    LanguageActionView: {
        position: 'absolute',
        left:0,
        
        justifyContent: 'center',
        flexDirection: 'row',
    },
    innerView: {
        backgroundColor: 'transparent',
        elevation: 0,
        position: 'absolute',
        left: 0,
        zIndex: 10
    }
});

export { Appbar };