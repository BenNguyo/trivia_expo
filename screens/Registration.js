import React from 'react'
import {View,Text, TextInput, Button, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Registration=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.userView}>

                <TextInput style = {styles.username}
                placeholder='  Username'
                 />
            </View>
            <View style={styles.userView}>           
                <TextInput style = {styles.username}
                secureTextEntry
                placeholder='  Password'/>
            </View>
            <TouchableOpacity style={styles.submit}><Text   onPress={()=>navigation.navigate('PickGame')}>SUBMIT</Text></TouchableOpacity>
            
            
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'black',

    },
    username:{
        borderColor:'gold',
        borderWidth:2,
        height:60,
        width:300,
        marginLeft:30,
        marginBottom: 30,
        borderRadius:10,
        backgroundColor:'white'

    },
    userView:{
        flexDirection:'row'
    },
    submit:{
        borderRadius:10,
        borderColor:'gold',
        borderWidth:4,
        width:80,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',        
    },
}

)
export default Registration