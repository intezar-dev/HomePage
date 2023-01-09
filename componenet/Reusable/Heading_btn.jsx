import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HeadingBtn = ({ heading, viewAll }) => {
    return (
        <View style={styles.textFlex}>
            <Text style={styles.textHeaidng}>{heading}</Text>
            <Text style={styles.textBtn}>{viewAll}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textFlex: {
        width: 390,
        flexDirection: "row",
        padding: 10,
        display:"flex",
        justifyContent:"space-between",
    },
    textHeaidng: {
        width: 270,
        alignItems: "center",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 21,
        color: "#1C2D57;"
        
    },
    textBtn: {
        color: "red",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 16,
        fontStyle: "normal",
    },
})

export default HeadingBtn;
