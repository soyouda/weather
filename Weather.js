import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#525252", "#3d72b4"],
        title: "흐림",
        subTitle: "야외 활동하기 좋아요"
    },
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#2980B9", "#6DD5FA"],
        title: "맑음",
        subTitle: "야외 활동하기 좋아요"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#606c88", "#3f4c6b"],
        title: "천둥번개",
        subTitle: "외출을 자제하세요"
    }, 
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#BBD2C5", "#536976"],
        title: "이슬비",
        subTitle: "우산을 챙기세요"
    }, 
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00416A", "#E4E5E6"],
        title: "비",
        subTitle: "우산을 챙기세요"
    }, 
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "눈",
        subTitle: "눈길을 조심하세요"
    }, 
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "흐림",
        subTitle: ""
    },
    mist: {
        iconName: "weather-fog",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "안개비",
        subTitle: "우산을 챙기세요"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "",
        subTitle: ""
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "",
        subTitle: ""
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "안개",
        subTitle: "외출시 시야확보에 주의하세요"
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "",
        subTitle: ""
    },
    Ash: {
        iconName: "weather-cloudy",
        gradient: ["#525252", "#3d72b4"],
        title: "",
        subTitle: ""
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#00416A", "#E4E5E6"],
        title: "돌풍",
        subTitle: "외출을 자제하세요"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#283048", "#859398"],
        title: "헐. 태풍",
        subTitle: "외출을 자제하세요"
    },
}

export default function Weather({temp, condition, city}){
    return (
        <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.title}>{city}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Clear", 
        "Clouds",
        "Haze",
        "mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize:48,
        fontWeight:"300",
        color: "white",
        marginBottom: 10
    },
    subTitle: {
        fontSize:20,
        color: "white",
    },
    textContainer: {
        paddingHorizontal: 20
    }
})