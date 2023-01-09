import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { adv_home_data } from '../../utils/constant';
import HeadingBtn from '../Reusable/Heading_btn';



const moboleImg = require("../../assets/m1.png")

const HomeAdvantageSalon = () => {
    return (
        <ScrollView style={styles.asvContainer}>
            <HeadingBtn heading={"Advantage of having  your salon App"} viewAll={"View All"} />
            <Image source={moboleImg} style={styles.imgContainer} />
            <ScrollView pagingEnabled horizontal style={styles.b_flex}>
                {adv_home_data.map((data) => (
                    <View style={styles.boxStyles} ket={data.id}>
                        <Image source={data.img1} style={styles.b_img} />
                        <Text style={styles.b_text}>{data.headingText}</Text>
                        <View style={styles.textBox}>
                            <Text style={styles.text2Style}>{data.Text2}</Text>
                            <Text style={styles.text2Style}>{data.Text3}</Text>
                            <Text style={styles.text2Style}>{data.Text4}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    asvContainer: {
        height: 480,
        width: 395,
        top:-30,
    },
    advHeading: {
        padding: 10,
        margin: 5,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",

    },
    salonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 21
    },
    salonBtn: {
        color: "red",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "500",

    },
    imgContainer: {
        width: 358,
        height: 80,
        margin: 15,
        resizeMode: "cover",
        opacity: 1,
    },
    // Box Component
    b_flex: {
        height: 420,
        borderRadius: 5,
        padding: 5,
        borderRadius: 19,
    },
    boxStyles: {
        width: 369,
        maxHeight: 250,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        shadowColor: '#404040',
        borderColor: 'yourchoice',
        borderWidth: 0.1,
        shadowRadius: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    b_img: {
        top: -35
    },
    b_text: {
        textAlign: "center",
        alignItems: "center",
        color: "#ED0046",
        fontWeight: "500",
        fontSize: 12,
    },
    textBox: {
        display: "flex",
        flexDirection: "column",
        margin: 5,
    },
    text2Style: {
        color: "#5A5A5A",
        fontStyle: "normal",
        fontSize: 12,
        fontWeight: "300",
        lineHeight: 16,
        textAlign: "center",
    },
})

export default HomeAdvantageSalon;
