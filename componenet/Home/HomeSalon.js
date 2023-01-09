import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { salon_home_data } from '../../utils/constant';
import HeadingBtn from '../Reusable/Heading_btn';

const HomeSalon = () => {
    return (
        <View style={styles.salon}>
            <HeadingBtn heading={"What we can do  for your salon?"} viewAll={"View All"} />
            {salon_home_data.map((data) => (
                <View style={styles.salon_box} key={data.id}>
                    <View style={styles.salon_box__}>
                        <Image source={data.img1} style={styles.s_img} />
                        <Text style={styles.s_text}>{data.salonText}</Text>
                    </View>
                    <View style={styles.salon_box__}>
                        <Image source={data.img2} style={styles.s_img} />
                        <Text style={styles.s_text}>{data.salonText2}</Text>
                    </View>
                    <View style={styles.salon_box__}>
                        <Image source={data.img3} style={styles.s_img} />
                        <Text style={styles.s_text}>{data.salonText3}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    salon: {
        width: "100%",
        height: "16%",
        top: 48,
        display: "flex",
    },
    salonHeading: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    salonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 21,
        backgroundColor: "#000"
    },
    salonBtn: {
        color: "red",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "500",
    },
    salon_box: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 388,
        height: 140,
        left: 3,
        justifyContent: "space-around",
        padding: 10,
    },
    salon_box__: {
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: "#fff",
        borderColor: 'yourchoice',
        borderWidth: 0.1,
        shadowColor: 'yourchoice',
        shadowRadius: 1,
    },
    s_img: {
        width: 50,
        height: 50,
        top: 20,
        left: 19,
        borderRadius: 10
    },
    s_text: {
        width: 200,
        top: 49,
        color: "#232323",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 13,
        fontStyle: "normal"
    },
})

export default HomeSalon;
