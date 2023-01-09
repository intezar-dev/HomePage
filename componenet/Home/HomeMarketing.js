import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { mark_home_data } from '../../utils/constant';

const HomeMarketing = ({ markText }) => {
    const [rightData, setRightData] = useState(mark_home_data)

    return (
        <ScrollView>
            <Text style={styles.textStyle}>{markText}</Text>
            <View style={styles.boxStyles}>
                {rightData.map((data) => (
                    <View style={styles.box1} key={data.id}>
                        <View style={styles.boxRound}>
                            <Image source={data.img1} style={styles.boxImg} />
                            <Text style={styles.boxTextSTyles}>{data.giftText}</Text>
                        </View>
                        <View style={styles.boxRound}>
                            <Image source={data.img1} style={styles.boxImg} />
                            <Text style={styles.boxTextSTyles}>{data.memberText}</Text>
                        </View>
                        <View style={styles.boxRound}>
                            <Image source={data.img1} style={styles.boxImg} />
                            <Text style={styles.boxTextSTyles}>{data.referalText}</Text>
                        </View>
                    </View>
                ))}
                <Image source={require("../../assets/a1.png")} style={styles.boxImage} />
                {rightData.map((data) => (
                    <View style={styles.box1} key={data.id}>
                        <View style={styles.boxRound}>
                            <Image source={data.img1} style={styles.boxImg} />
                            <Text style={styles.boxTextSTyles}>{data.giftText}</Text>
                        </View>
                        <View style={styles.boxRound}>
                            <Image source={data.img1} style={styles.boxImg} />
                            <Text style={styles.boxTextSTyles}>{data.memberText}</Text>
                        </View>
                        <View style={styles.boxRound}>
                            <Image source={data.img1} style={styles.boxImg} />
                            <Text style={styles.boxTextSTyles}>{data.referalText}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        color: "#1C2D57",
        fontSize: 16,
        fontFamily: "normal",
        lineHeight: 21,
        padding: 10,
    },
    boxStyles: {
        width: "100%",
        height: 375,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignItems: "center",
    },
    box1: {
        width: 122,
        height: 340,
        backgroundColor: "#fff",
        flexDirection: "column",
    },
    boxRound: {
        width: 65,
        height: 65,
        backgroundColor: "red",
        borderRadius: 50,
        margin: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    boxImg: {
        width: 35,
        height: 35,
    },
    boxTextSTyles: {
        position: "absolute",
        top: 72,
        color: "#102C56",
        fontSize: 12,
        width: 200,
        left: -8,
    },
    boxImage: {
        width: 150,
        height: 290,
        backgroundColor: "#fff",
        margin: 1,
        resizeMode: "contain"
    },
})

export default HomeMarketing;
