import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DataTable } from 'react-native-paper';
import axios from 'axios'



const FOURTH = ({ navigation }) => {
    const [data, setData] = useState([]);


useEffect(()=>{

fetchData();
}, []);


// const fetchData = async ()=>{

//     try{

//         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
//         setData(response.data)

//     }

// catch(err){

// console.err('Error Message', err)
// }

// }

const fetchData = async ()=>{

    try{

        const response = await fetch (`https://jsonplaceholder.typicode.com/posts`)
        const Datas = await response.json();
        setData(Datas)

    }

catch(err){

console.err('Error Message', err)
}

}




    return (
        <View>
            <Text style={{ color: 'red', fontSize: 20, marginLeft: 130 }}>Welcome Fourth Page</Text>

            <ScrollView horizontal={true}>
            <DataTable>
            
      <DataTable.Header>
        <DataTable.Title>UserID</DataTable.Title>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>Title</DataTable.Title>
        <DataTable.Title>Body</DataTable.Title>
      </DataTable.Header>   
      

{data.map((value, it)=>(
        <DataTable.Row key={it}>
          <DataTable.Cell>{value.userId}</DataTable.Cell>
          <DataTable.Cell >{value.id}</DataTable.Cell>
          <DataTable.Cell >{value.title}</DataTable.Cell>
          <DataTable.Cell >{value.body}</DataTable.Cell>
        </DataTable.Row>
    ))}
     
        </DataTable>
       
        </ScrollView>

            
        </View>
    );
}

export default FOURTH;
