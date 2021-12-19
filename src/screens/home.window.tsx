import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, I18nManager, Alert } from 'react-native';
import { Appbar } from '../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { MapView } from '../components/mapView';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';

const HomeWindow = ({ navigation }: any) => {
    const [gameState, setGameState] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ])
    const [currentPlayer, setCurrentPlayer] = useState(1)
    var Arr: any[] = [];
    useEffect(() => {
        startGame();
    }, [])

    const startGame = () => {
        setGameState(
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ]
        )
    }
    const getWinner = () => {
        const tilesNum =3;
        var Arr = gameState;
        var sum;
        var sum_1;
        var sum_2;
        var sum_3;
        //check if there is row winner 
        for ( var i =0; i< tilesNum ; i++){
            sum = Arr[i][0] + Arr[i][1] + Arr[i][2]
            if (sum ==3) {return 1;}
            else if (sum == -3 ) {return -1;}
        }

        //check if there is coloum winner 
        for ( var i =0; i< tilesNum ; i++){
            sum = Arr[0][i] + Arr[1][i] + Arr[2][i]
            if (sum ==3) {return 1;}
            else if (sum == -3 ) {return -1;}
        }

        //check if there is diagonal winner 
        for ( var i =0; i< tilesNum ; i++){
            sum = Arr[0][0] + Arr[1][1] + Arr[2][2]
            if (sum ==3) {return 1;}
            else if (sum == -3 ) {return -1;}
        }

        for ( var i =0; i< tilesNum ; i++){
            sum = Arr[2][0] + Arr[1][1] + Arr[0][2]
            if (sum ==3) {return 1;}
            else if (sum == -3 ) {return -1;}
        }

        return 0;
        
    }
    const onTilePress = (row: number ,col: number) => {
        //Prevent change of tiles
        var value = gameState[row][col]
        if (value !==0) {return;}

        var curPlayer = currentPlayer;
        Arr=gameState.slice()
        Arr[row][col]= curPlayer;
        setGameState(Arr);
        

        // var nextPlayer = (curPlayer == 1) ? -1 : 1;
        setCurrentPlayer(curPlayer*-1);

        var winner =getWinner();
        if (winner ==1){
            Alert.alert("Player 1 is the winner");
            startGame();
        }
        else if(winner==-1){
            Alert.alert("Player 2 is the winner");
            startGame();
        }
        

    }

    const PutIcon = (row: number, col: number) => {
        var value = gameState[row][col];
        
        switch (value) {
            case 1: return <Icons name="close" style={styles.crossView} />;
            case -1: return <Icons name="circle-outline" style={styles.circleView} />;
            default: return <View />;
        }

    }

    const { container, tiles, backGround } = styles;
    return (
        <View style={container}>
            <Appbar title='homeWindow.windowTitle' />

            <View style={backGround}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity  onPress={() => { onTilePress(0,0)}} style={[tiles, { borderTopWidth: 0, borderLeftWidth: 0 }]} >
                        {PutIcon(0, 0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onTilePress(0,1)}} style={[tiles, { borderTopWidth: 0 }]} >
                        {PutIcon(0, 1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onTilePress(0,2)}} style={[tiles, { borderTopWidth: 0, borderRightWidth: 0 }]} >
                        {PutIcon(0, 2)}
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { onTilePress(1,0)}} style={[tiles, { borderLeftWidth: 0 }]} >
                        {PutIcon(1, 0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onTilePress(1,1)}} style={tiles} >
                        {PutIcon(1, 1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onTilePress(1,2)}} style={[tiles, { borderRightWidth: 0 }]} >
                        {PutIcon(1, 2)}
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { onTilePress(2,0)}} style={[tiles, { borderLeftWidth: 0, borderBottomWidth: 0 }]} >
                        {PutIcon(2, 0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onTilePress(2,1)}} style={[tiles, { borderBottomWidth: 0 }]} >
                        {PutIcon(2, 1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onTilePress(2,2)}} style={[tiles, { borderBottomWidth: 0, borderRightWidth: 0 }]} >
                        {PutIcon(2, 2)}
                    </TouchableOpacity>
                </View>

                <View style={{paddingTop:50}} />
                <Button title="new game" onPress={() => startGame()}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",

    },
    boxView: {
        height: wp(80),
        width: wp(80),
        borderWidth: 5,
        borderColor: "#ffffff",
        borderStyle: 'dashed'
    },
    tiles: {
        borderWidth: 10,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    backGround: {
        flex: 1,
        backgroundColor: "#ffff",
        justifyContent: 'center',
        alignItems: "center",

    },
    logoutButton: {
        marginRight: wp(5)
    },
    languageButton: {
        width: 60,

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

export { HomeWindow };