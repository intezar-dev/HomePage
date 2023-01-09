import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BlogHeader = () => {
    return (
        <ImageBackground source={require("../../../assets/bh.png")} style={styles.b_header}>
            <View style={styles.b_middelStyles}>
                <Text style={styles.leftStyles}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                </Text>
                <Text style={styles.bolgStyles}>Blogs</Text>
                <Text style={styles.leftStyles}>
                    <AntDesign name="close" size={24} color="#fff" />
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    b_header: {
        width: 400,
        height: 147,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        top: 35,
    },
    b_middelStyles: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginTop: 40
    },
    leftStyles: {
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        fontWeight: "200",
        opacity: 0.5,
        borderRadius: 50,
    },

    bolgStyles: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "700",
        lineHeight: 26,
        alignItems: "center",
        fontStyle: "normal",
        textAlign: "center",
    }
})

export default BlogHeader;
