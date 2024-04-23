import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FIRST = ({ navigation, route }) => {
    const { name, email, age } = route.params;

    return (
        <View>
            <Text style={{ color: 'red', fontSize: 20, marginLeft: 130 }}>Welcome First Page</Text>
            <Text style={{ color: 'red', fontSize: 20, marginLeft: 130 }}>{name}</Text>
            <Text style={{ color: 'red', fontSize: 20, marginLeft: 130 }}>{email}</Text>
            <Text style={{ color: 'red', fontSize: 20, marginLeft: 130 }}>{age}</Text>
        </View>
    );
}

export default FIRST;
