import React from 'react'
import { SafeAreaView, StyleSheet,View,TextInput,TouchableOpacity, Text } from 'react-native';

const EnterCode=({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput style = {styles.username}
                placeholder='  Enter Game code'
                />
            </View>
            <TouchableOpacity style={styles.submit}><Text   onPress={()=>navigation.navigate('PickGame')}>SUBMIT</Text></TouchableOpacity>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'

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
})
export default EnterCode