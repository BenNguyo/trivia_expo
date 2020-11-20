import React from 'react'
import {View, TouchableOpacity,Text, StyleSheet} from 'react-native'

const Home =({navigation})=>{
    return(
        <View style={styles.container}>
            <View style= {styles.homeImage}><Text>I AM AN IMAGE OR LOGO</Text></View>
            <TouchableOpacity style={styles.homeLinks} onPress = {()=>navigation.navigate('Registration')}><Text >REGISTER TO START GAME</Text></TouchableOpacity>
            <TouchableOpacity style={styles.homeLinks} onPress = {()=>navigation.navigate('EnterCode')}><Text>ENTER GAME CODE</Text></TouchableOpacity>
            <TouchableOpacity style={styles.homeLinks} onPress = {()=>navigation.navigate('Game')}><Text >MY SCORES</Text></TouchableOpacity>
            <TouchableOpacity style={styles.homeLinks} onPress = {()=>navigation.navigate('Registration')}><Text >ABOUT THE GAME</Text></TouchableOpacity>
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    homeImage:{
        flex: 3,
        backgroundColor:'#6C63FF',
        borderColor:'black',
        margin: 10,
        minWidth:'90%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 30,
        
       
    },
    homeLinks:{
        flex:1,
        backgroundColor:'beige',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'lightgray',
        margin: 10,
        minWidth:'90%',
        borderRadius:15,
        
        
    },
    bottomTabs:{
        flex:0.6,
        flexDirection:'row',
        backgroundColor:'lightblue',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'lightgray',
        borderWidth:1,
        marginTop: 10,
        minWidth:'90%',
        
    },
  });

export default Home