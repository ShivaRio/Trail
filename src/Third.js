import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const THIRD = ({navigation, route}) =>{

    const { figureData } = route.params;
return(


    <View style={styles.container}>
    <Text style={styles.text}>Config: {figureData.config}</Text>
    <Text style={styles.text}>Description: {figureData.description}</Text>
</View>
)


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'red'
    }

}


)


export default THIRD;