import React, { Component } from 'react';

import { Keyboard, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

class Toast extends Component {

    state = {
        visible: false,
        type: 'default',
        message: "",
        duration: 2000
    }

    show = (message = "", duration = 2000, type = "default") => {
        Keyboard.dismiss();

        this.setState({ visible: true, message, duration, type });
    }

    hide = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible, duration = 2000, message, type } = this.state;
        let colors = loadColors(type);

        return (
            <Snackbar
                style={[styles.bar(colors?.backgroundColor)]}
                visible={visible}
                duration={duration}
                onDismiss={this.hide}
                action={{
                    label: 'Dismiss',
                    onPress: this.hide
                }}
                theme={{
                    colors: {
                        accent: colors?.color
                    }
                }}>
                {message}
            </Snackbar>
        )
    }
}

const loadColors = (type: String) => {
    switch (type) {

        case 'success': {
            return {
                backgroundColor: "#37834F",
                color: "#ffffff"
            }
        }

        default: {
            return {
                backgroundColor: "#B94B40",
                color: "#ffffff"
            }
        }
    }
}

const styles = StyleSheet.create({
    bar: (backgroundColor: String) => ({
        backgroundColor,
        borderRadius: wp(2),
        minHeight: wp(8),
        padding: wp(1),
        elevation: 100,
        fontFamily: 'bold',
    }),
    errorBar: {
        backgroundColor: "#B94B40"
    },
    successBar: {
        backgroundColor: "#37834F"
    }
});

export { Toast };