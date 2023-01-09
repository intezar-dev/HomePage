import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';




const HomeOffer = ({ offerText, dummyText }) => {
    return (
        <ScrollView>
            <View style={styles.of_container}>
                <Text style={styles.of_text}>{offerText}</Text>
                <Text style={styles.dummyTexyStyles}>{dummyText}</Text>
                <TouchableOpacity style={styles.offer_btnStyles}>
                    <Text style={styles.offer_btn}>Request Demo</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    of_container: {
        width: 395,
        height: 248,
        backgroundColor: "#102C56",
        alignItems: "center",
    },
    of_text: {
        textAlign: "center",
        alignItems: "center",
        fontSize: 21,
        fontWeight: "500",
        lineHeight: 31,
        color: "#fff",
        fontStyle: "normal",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    dummyTexyStyles: {
        color: "#fff",
        opacity: 0.9,
        fontSize: 10,
        fontWeight: "400",
        lineHeight: 21,
        textAlign: "center",
        alignItems: "center",
    },
    offer_btnStyles: {
        width: 184,
        height: 41,
        backgroundColor: "red",
        textAlign: "center",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    offer_btn: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 21,
        textAlign: "center",
    }
})

export default HomeOffer;
