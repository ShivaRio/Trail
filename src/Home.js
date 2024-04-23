import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HOME = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const submit = () => {
        navigation.navigate('First', {
            name: name,
            email: email,
            age: age,
        });
    };

    return (
        <View>
            <Text style={{ color: 'red', fontSize: 20, marginLeft: 130 }}>Hello Siva</Text>
            <Icon name="account" size={50} color="#900" style={{ marginLeft: 20 }} />
            <TextInput placeholder="Name" placeholderTextColor={"blue"} style={{ color: 'black', marginLeft: 20 }} onChangeText={(text) => setName(text)} />
            <TextInput placeholder="Email" placeholderTextColor={"blue"} onChangeText={(text) => setEmail(text)} style={{ color: 'black', marginLeft: 20 }} />
            <TextInput placeholder="Age" placeholderTextColor={"blue"} onChangeText={(text) => setAge(text)} style={{ color: 'black', marginLeft: 20 }} />
            <Button onPress={submit} title="First" color="#841584" />
        </View>
    );
}

export default HOME;

