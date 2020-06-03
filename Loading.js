import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";

export default function Loading(){
    return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Getting the weather</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 30,
        paddingVertical: 150,
        backgroundColor: "#fdf6aa",
    },
    text: {
        color: "#000",
        fontSize: 30
    }
})