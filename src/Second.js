import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const SECOND = ({navigation}) =>{

    const figures = [
        {
          config: 112,
          description: "description text 1"
        },
        {
          config: 787,
          description: "description text 2"
        }
      ];
    




return(
    <View>
<Text style={{color:'red', fontSize:20, alignItems:'center', justifyContent:'center', marginLeft:130}}>Welcome Second Page</Text>

{figures.map((figure, index) => (
<View key={index}>
   

    <Button  title="Third Page" onPress={() => navigation.navigate('Third', { figureData: figure })}/>
    </View>


        
      ))}

</View>
)


}


const style = StyleSheet.create({



}

)


export default SECOND;