import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { home_digital_data } from '../../utils/constant';
import Heading_btn from '../Reusable/Heading_btn'

const HomeDigitalSalon = () => {
    return (
        <ScrollView style={styles.d_scrolStyles}>
            <Heading_btn heading={"Digital Salon bundle package"} viewAll={"View All"} />
            <ScrollView pagingEnabled horizontal style={{ height: 350 }}>
                {home_digital_data.map((data) => (
                    <View style={styles.d_boxContainer}>
                        <View style={styles.d_box}>
                            <View style={styles.d_imgRound}>
                                <View style={styles.d_img}>
                                    <Image source={data.dImg} style={{ width: 30, height: 30, opacity: 1, resizeMode: "contain" }} />
                                </View>
                            </View>
                            <Text style={styles.d_text}>{data.text}</Text>
                            <Text style={styles.d_dummyText}>{data.dummyText} </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    d_scrolStyles: {
        height: 400,
    },
    d_boxContainer: {
        width: 355,
        height: 200,
        margin: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        top: 55,
        padding: 1,
        backgroundColor: "#102C56",
    },

    d_imgRound: {
        top: -60,
        width: 88,
        height: 88,
        borderRadius: 50,
        backgroundColor: "#102C56",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#102C56",
        backgroundColor: "#fff",
    },
    d_img: {
        backgroundColor: "#fff",
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#102C56",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#102C56",
    },
    d_box: {
        alignItems: "center"
    },
    d_text: {
        maxWidth: 210,
        fontSize: 12,
        height: 36,
        textAlign: "center",
        lineHeight: 13,
        color: "#fff",
        opacity: 0.9,
        top: -40,
        fontWeight: "500"
    },
    d_dummyText: {
        top: -20,
        fontSize: 10,
        color: "#fff",
        fontWeight: "400",
        textAlign: "center",
        alignItems: "center",
    }
})

export default HomeDigitalSalon;
