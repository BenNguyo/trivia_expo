import React from 'react'
import {FlatList, View, Text, StyleSheet, SafeAreaView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DATA=[
    {id:'1',
    title:'GEOGRAPHY'},
    {id:'2',
    title:'ENVIRONMENT'},
    {id:'3',
    title:'GENERAL KNOWLEDGE'},
    {id:'4',
    title:'AVIATION'},
    {id:'5',
    title:'PHYSICS'},
    {id:'6',
    title:'THE WILD'},
    {id:'7',
    title:'EARTH'},
    {id:'8',
    title:'SPACE'},    
]
const Item = ({title})=>(
<Text>{title}</Text>
)

const PickGame =({navigation})=>{

    const renderItem=({item})=>(
        <TouchableOpacity style={styles.item}><Item  title={item.title}/><Text >v</Text></TouchableOpacity>
    )


    return(
        <SafeAreaView style ={styles.container}>
            <FlatList
            data= {DATA}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            />

        </SafeAreaView>


        

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems:'center',
        justifyContent: 'center'
    },
    item:{
        margin:10,
        backgroundColor: 'beige',
        minWidth:'80%',
        maxWidth:'81%',
        padding:13,
        flexDirection:'row',
        justifyContent:'space-between',  
        borderRadius: 20,     
    },

})
export default PickGame;