import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { bloghomeData } from '../../../utils/constant';
import { ScrollView } from 'react-native';

const BlogHome = () => {
    return (
        <ScrollView style={styles.b_home}>
            {bloghomeData.map((data) => (
                <View style={styles.h_box} key={data.id}>
                    <Image source={data.img} style={styles.leftImgBox} />
                    <View style={styles.rightBox}>
                        <Text style={styles.textOne}>{data.days}</Text>
                        <Text style={styles.texttwo}>{data.text}</Text>
                        <View style={styles.textthree}>
                            <Text>
                                <AntDesign name={data.icon1} size={15} color="red" />&nbsp;123k
                            </Text>
                            <Text>
                                <AntDesign name={data.icon2} size={15} color="red" />&nbsp;25
                            </Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    b_home: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        top: 70,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 30,
        marginBottom:80,
    },
    h_box: {
        width: "100%",
        height: 170,
        borderRadius: 5,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: "#737373",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
    },
    leftImgBox: {
        width: 110,
        height: 140,
        borderRadius: 3,
    },
    rightBox: {
        width: 266,
        height: 140,
        backgroundColor: "#fff",
    },
    textOne: {
        fontWeight: "400",
        color: "#102C56",
        fontSize: 14,
    },
    texttwo: {
        fontWeight: "500",
        color: "#102C56",
        fontSize: 16,
        lineHeight: 21,
        fontStyle: "normal",
        color: "#000"
    },
    textthree: {
        width: 150,
        flexDirection: "row",
        margin: 5,
        justifyContent: "space-between",
        padding: 10,
    },
})

export default BlogHome;
