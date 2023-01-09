import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { home_adv_data } from '../../utils/constant';
import HeadingBtn from '../Reusable/Heading_btn';

const HomeFeatureAppoinment = ({ advHeading }) => {
    return (
        <ScrollView style={styles.scrolStyles}>
            <HeadingBtn heading={"Feature Of Appontment Managemnet Solution"} viewAll={"View All"} />
            <View style={styles.f_box}>
                {home_adv_data.map((data) => (
                    <View style={styles.f_imgBox} key={data.id}>
                        <Image source={data.advImg} style={styles.f_img} />
                        <Text style={styles.f_textStyles}>{data.name}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrolStyles: {
        top: 20,
        width: 395,
        height: 425,
        left: 1,
        backgroundColor: "#fff"
    },
    textFlex: {
        width: 390,
        flexDirection: "row",
        padding: 10,
    },
    textHeaidng: {
        width: 200,
        alignItems: "center",
        fonts: 16,
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
        left: 108
    },
    f_box: {
        top: 30,
        weight: 300,
        height: 240,
        margin: 5,
        padding: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    f_imgBox: {
        width: 85,
        height: 85,
        borderRadius: 6,
        margin: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
        borderColor: 'yourchoice',
        borderWidth: 0.1,
        overflow: 'hidden',
        shadowColor: 'yourchoice',
        shadowRadius: 10,
        shadowOpacity: 1,
        backgroundColor: "#fff"
    },
    f_img: {
        width: 32,
        height: 32,
    },
    f_textStyles: {
        fontSize: 11,
        top: 12,
        fontStyle: "normal",
        fontWeight: "400",
        textAlign: "center",
        alignItems: "center"
    }
})

export default HomeFeatureAppoinment;
