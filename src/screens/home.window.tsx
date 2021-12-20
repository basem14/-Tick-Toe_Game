import React, { useState, useEffect} from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Appbar } from '../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { MapView } from '../components/mapView';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import { FilledButton } from '../components/button';
import Colors from '../constants/Colors';

const HomeWindow = ({ navigation }: any) => {

    const [gameState, setGameState] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ])
    const [currentPlayer, setCurrentPlayer] = useState(1)
    var Arr: any[] = [];
    const startGame = () => {
        setGameState(
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ]
        )
    }
    
    useEffect(() => {
        startGame();
    }, [])


    //Helper Method to check if map full and no winner
    function exists(arr: any, search: any) {
        return arr.some(row => row.includes(search));
    }

    const getWinner = () => {
        const tilesNum = 3;
        var Arr = gameState;
        var sum;

        //check if there is row winner 
        for (var i = 0; i < tilesNum; i++) {
            sum = Arr[i][0] + Arr[i][1] + Arr[i][2]
            if (sum == 3) { return 1; }
            else if (sum == -3) { return -1; }
        }

        //check if there is coloum winner 
        for (var i = 0; i < tilesNum; i++) {
            sum = Arr[0][i] + Arr[1][i] + Arr[2][i]
            if (sum == 3) { return 1; }
            else if (sum == -3) { return -1; }
        }

        //check if there is diagonal winner 
        for (var i = 0; i < tilesNum; i++) {
            sum = Arr[0][0] + Arr[1][1] + Arr[2][2]
            if (sum == 3) { return 1; }
            else if (sum == -3) { return -1; }
        }

        for (var i = 0; i < tilesNum; i++) {
            sum = Arr[2][0] + Arr[1][1] + Arr[0][2]
            if (sum == 3) { return 1; }
            else if (sum == -3) { return -1; }
        }


        return 0;

    }


    const onTilePress = (row: number, col: number) => {
        //Prevent change of tiles
        var value = gameState[row][col]
        if (value !== 0) { return; }

        var curPlayer = currentPlayer;
        Arr = gameState.slice()
        Arr[row][col] = curPlayer;
        setGameState(Arr);
        setCurrentPlayer(curPlayer * -1);

        var winner = getWinner();
        if (winner == 1) {
            Alert.alert("Player 1 is the winner");
            startGame();
        }
        else if (winner == -1) {
            Alert.alert("Player 2 is the winner");
            startGame();
        }

        //check if there is draw  
        else if (exists(gameState, 0) == false) {
            Alert.alert(
                "Draw! No Winner Here",
                "Want To Play Again?",
                [
                    {
                        text: "Play Again",
                        onPress: () => startGame()
                    }
                ]
            );
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

    const { container, backGround } = styles;
    return (
        <View style={container}>
            <Appbar title='Tick Tack Toe Game' />

            <View style={backGround}>

                <MapView PutIcon={PutIcon} onTilePress={onTilePress} />
                <View style={{ paddingTop: 50 }} />
                <FilledButton title="Start New Game" onPress={() => startGame()} />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,

    },
    boxView: {
        height: wp(80),
        width: wp(80),
        borderWidth: 5,
        borderColor: Colors.dark.whiteColor,
        borderStyle: 'dashed'
    },
    backGround: {
        flex: 1,
        backgroundColor: Colors.dark.background,
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