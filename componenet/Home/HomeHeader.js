import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { home_data } from '../../utils/constant';

const HomeHeader = ({ heading, smText }) => {
    return (
        <ImageBackground source={require("../../assets/h1.png")} style={styles.h_header}>
            <View style={styles.h_flex}>
                <Text style={styles.textStyle}>{heading} </Text>
                <AntDesign name="bells" size={24} color="#fff" />
            </View>
            <Text style={styles.smText}>{smText}</Text>
            <View style={styles.h_box}>
                <ScrollView pagingEnabled horizontal>
                    {home_data.map((data) => (
                        <ImageBackground source={data.img} style={styles.backImg} key={data.id}>
                            <Text style={styles.h_box_text}>{data.offer}</Text>
                            <Text style={styles.h_smText}>{data.limited}</Text>
                            <View style={styles.h_box_btn}>
                                <Text style={styles.smbtnStyle}>{data.demo}</Text>
                            </View>
                        </ImageBackground>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.dotFlex}>
                <Text style={styles.h_dot}></Text>
                <Text style={styles.h_dot}></Text>
                <Text style={styles.h_dot}></Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    h_header: {
        width: "100%",
        height: 360,
        top: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    h_flex: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 15,
    },
    textStyle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
        lineHeight: 28
    },
    smText: {
        fontStyle: "normal",
        color: "#fff",
        fontWeight: "400",
        lineHeight: 18,
        fontSize: 14,
        opacity: 0.8,
        marginLeft: 20,
    },
    h_box: {
        width: 357,
        height: 185,
        borderRadius: 12,
        backgroundColor: "#909090",
        margin: 20,
    },
    backImg: {
        width: 357,
        height: 185,
        resizeMode: "cover",
        opacity: 0.8,
        justifyContent: "center",
        alignItems: "center"
    },
    h_box_text: {
        fontSize: 22,
        lineHeight: 30,
        color: "#fff",
        alignItems: "center",
        fontWeight: "700",
        padding: 5,
        opacity: 0.99999,
        letterSpacing: 0.5,
    },
    h_smText: {
        width: 335,
        height: 65,
        margin: 5,
        padding: 5,
        color: "#ffffff",
        fontWeight: "500",
    },
    h_box_btn: {
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#ED0046",
        width: 170,
        borderRadius: 50,
    },
    smbtnStyle: {
        color: "#fff",
        padding: 10,
    },
    dotFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    h_dot: {
        color: "red",
        width: 12,
        height: 12,
        margin: 4,
        borderRadius: 50,
        backgroundColor: "#fff"
    },
})

export default HomeHeader;
