import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { homeFooterNavigation } from '../../utils/constant'


const HomeFooterNavigation = () => {
    return (
        <View style={styles.footerStyles}>
            {homeFooterNavigation.map((data) => (
                <View style={styles.footerContainer}>
                    <Image source={data.h_footer_Img} style={styles.f_img} />
                    <Text style={styles.footText}>{data.name}</Text>
                </View>
            ))}
        </View>
    );
}
const styles = StyleSheet.create({
    footerStyles: {
        top: 40,
        width: 400,
        height: 85,
        backgroundColor: "#102C56",
        marginBottom: 40,
        flexDirection: "row",
    },
    footerContainer: {
        maxWidth: 300,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 9,
    },
    footText: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "400",
        top: 10
    }
})

export default HomeFooterNavigation;
