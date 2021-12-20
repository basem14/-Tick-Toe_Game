import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MapView = ({ PutIcon, onTilePress }: any) => {
    const { tiles } = styles;
    return (
        <>
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity onPress={() => { onTilePress(0, 0) }} style={[tiles, { borderTopWidth: 0, borderLeftWidth: 0 }]} >
                    {PutIcon(0, 0)}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onTilePress(0, 1) }} style={[tiles, { borderTopWidth: 0 }]} >
                    {PutIcon(0, 1)}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onTilePress(0, 2) }} style={[tiles, { borderTopWidth: 0, borderRightWidth: 0 }]} >
                    {PutIcon(0, 2)}
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity onPress={() => { onTilePress(1, 0) }} style={[tiles, { borderLeftWidth: 0 }]} >
                    {PutIcon(1, 0)}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onTilePress(1, 1) }} style={tiles} >
                    {PutIcon(1, 1)}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onTilePress(1, 2) }} style={[tiles, { borderRightWidth: 0 }]} >
                    {PutIcon(1, 2)}
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity onPress={() => { onTilePress(2, 0) }} style={[tiles, { borderLeftWidth: 0, borderBottomWidth: 0 }]} >
                    {PutIcon(2, 0)}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onTilePress(2, 1) }} style={[tiles, { borderBottomWidth: 0 }]} >
                    {PutIcon(2, 1)}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onTilePress(2, 2) }} style={[tiles, { borderBottomWidth: 0, borderRightWidth: 0 }]} >
                    {PutIcon(2, 2)}
                </TouchableOpacity>

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
    }
});

export { MapView };
