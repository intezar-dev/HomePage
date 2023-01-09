import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const HomeFeatures = ({ textHeading, textOne, textTwo, textThree, textfour }) => {
    return (
        <ScrollView style={styles.scrollStyles}>
            <Text style={styles.textHeading}>{textHeading}</Text>
            <View style={styles.f_block}>
                <Image source={require("../../assets/f1.png")} style={styles.f_imgleftBox} />
                <View style={styles.f_rightBlock}>
                    <View style={styles.textFlex}>
                        <AntDesign name="checkcircleo" style={styles.textIcon} />
                        <Text style={styles.textStyles}>{textOne}</Text>
                    </View>
                    <View style={styles.textFlex}>
                        <AntDesign name="checkcircleo" style={styles.textIcon} />
                        <Text style={styles.textStyles}>{textTwo}</Text>
                    </View>
                    <View style={styles.textFlex}>
                        <AntDesign name="checkcircleo" style={styles.textIcon} />
                        <Text style={styles.textStyles}>{textThree}</Text>
                    </View>
                    <View style={styles.textFlex}>
                        <AntDesign name="checkcircleo" style={styles.textIcon} />
                        <Text style={styles.textStyles}>{textfour}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollStyles: {
        width: "100%",
        height: 250,
        top: 15,
        marginBottom: 100,
    },
    textHeading: {
        padding: 10,
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 21,
        color: "#1C2D57",
    },
    f_block: {
        maxWidth: 375,
        height: 395,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
    },
    f_imgleftBox: {
        width: 240,
        height: 188,
        top: -1,
        resizeMode: "contain",
    },
    f_rightBlock: {
        left: -70,
        top: 17,
    },
    textFlex: {
        padding: 5,
        top: 10,
        flexDirection: "row",
    },
    textIcon: {
        color: "red",
        fontSize: 18,
        right: 1,
    },
    textStyles: {
        fontSize: 10,
        fontWeight: "400",
        color: "#232323",
        lineHeight: 13,
        fontStyle: "normal"
    }
})

export default HomeFeatures;
