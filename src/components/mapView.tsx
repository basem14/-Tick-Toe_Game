import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, I18nManager, Alert } from 'react-native';
import { Appbar } from '.';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';
const MapView = ({ navigation }: any) => {
    const { tiles, crossView, circleView} = styles;
    return (
        <>
            <View style={{ flexDirection: "row" }}>
                <View style={[tiles, { borderTopWidth: 0, borderLeftWidth: 0 }]} >
                    <Icons name="close" style={crossView}/>
                </View>
                <View style={[tiles, { borderTopWidth: 0 }]} >
                <Icons name="circle-outline" style={circleView}/>
                    </View>
                <View style={[tiles, { borderTopWidth: 0, borderRightWidth: 0 }]} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={[tiles, { borderLeftWidth: 0 }]} />
                <View style={tiles} />
                <View style={[tiles, { borderRightWidth: 0 }]} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={[tiles, { borderLeftWidth: 0, borderBottomWidth: 0 }]} />
                <View style={[tiles, { borderBottomWidth: 0 }]} />
                <View style={[tiles, { borderBottomWidth: 0, borderRightWidth: 0 }]} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    tiles: {
        borderWidth: 10,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    crossView: {
        color: "red",
        fontSize: 60
    },
    circleView: {
        color: "green",
        fontSize: 60
    }
});

export { MapView };
