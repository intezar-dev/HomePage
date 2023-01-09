import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import Heading_btn from '../Reusable/Heading_btn'
import { home_work_data } from '../../utils/constant'

const HomeWorks = () => {
    return (
        <ScrollView style={styles.w_container}>
            <Heading_btn heading={"How it Works"} />
            <ScrollView pagingEnabled horizontal style={{ height: 350 }}>
                {home_work_data.map((data) => (
                    <View style={styles.d_box} key={data.id}>
                        <View style={styles.d_boxContainer}>
                            <Image source={data.backImg} />
                            <Text style={styles.w_one}>{data.numText}</Text>
                        </View>
                        <Text style={styles.w_textStyles}>{data.text}</Text>
                        <Text style={styles.w_dummyStyles}>{data.dummyText}</Text>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    w_container: {
        height: 350,
    },
    d_box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    d_boxContainer: {
        width: 132,
        height: 132,
        margin: 20,
        display: "flex",
        flexDirection: "row",
        borderRadius: 20,
    },
    w_one: {
        top: -10,
        left: -3,
        width: 25,
        height: 25,
        color: "red",
        fontWeight: "500",
        backgroundColor: "#fff",
        borderRadius: 50,
        textAlign: "center",
        alignItems: "center",
        position: "absolute",
    },
    d_box: {
        alignItems: "center",
        margin:10,
    },
    w_textStyles: {
        maxWidth: 266,
        fontSize: 14,
        height: 28,
        textAlign: "center",
        lineHeight: 13,
        color: "red",
        opacity: 0.9,
        fontWeight: "500",
    },

    w_dummyStyles: {
        maxWidth: 232,
        height: 32,
        fontSize: 10,
        color: "#000",
        fontWeight: "400",
        textAlign: "center",
        alignItems: "center",
        left: 10,
        marginRight: 10,

    }
})

export default HomeWorks;
