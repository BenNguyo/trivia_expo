import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'


const data=[{
    'id':'1',
    'question':'Who let the dogs out?',
    'choice':'Not me !',
},{
    'id':'2',
    'question':'What is the next number in sequence?',
    'choice':'eleventeen'
},{
    'id':'3',
    'question':'Favourite phone?',
    'choice':'Samsung S21',
},{
    'id':'4',
    'question':'Worst year?',
    'choice':'2020',
},{
    'id':'5',
    'question':'Is it a plane?',
    'choice':'Nope, just a big bird',
},
]

const Game = ({navigation})=>{
    const [timeLeft, setTimeLeft]=useState(15)
    const [timeElapse, setTimeElapse] = useState('green')
    const [gameEnd, setGameEnd] = useState('black')


    //countdown timer
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTimeLeft(prevtimeLeft=>prevtimeLeft-1)

        },1000)
        return () => clearInterval(interval);
    },[])

    //timer colour change effects
    useEffect(()=>{
        if(timeLeft<0){setTimeLeft(12)}
        else if(timeLeft===0){setGameEnd('black'), setTimeElapse('black')}
        else if(timeLeft < 5){          
            //navigation.navigate('PickGame')
            setTimeElapse('red')
        }
        else if( timeLeft <=10){setTimeElapse('gold')}
        
    },[timeLeft])

    //get questions from the api
    const[query, setQuery]= useState()
    const[choice1, setChoice1]= useState()

    useEffect(()=>{
        const getResults = async()=>{
            const result = await axios.get('http://192.168.4.105:8000/quiz/question//');
            setQuery(result.data[tracker].query)
            setChoice1(result.data[tracker].choice1)
        }
        getResults()
    },[])

    //navigates between active questions
    const [tracker, setTracker] = useState(0)


    //keep track of score
    /*const [tickScore, setTickScore] = useState(0)
    const [timeScore, setTimeScore] = useState(0)
    const points=0

    //triggers when any choice is made
    useEffect(()=>{

        //check to see if answer is right and if , trigger incrementScore
        if(correct_choice === selected_choice){
            const points = prevpoints=>prevpoints+1
        }
        


        //increments score
        useEffect(()=>{
            const incrementScore=()=>{
                setTickScore(prevtickScore=>prevtickScore+50)
            }
        },[points])

        //hops to next question
        setTracker(prevTracker=>prevTracker +1)

    },[choiceMade])*/



    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.progressBar} >
                <View style={styles.scoreBar}><Text style= {styles.scoreText}>500</Text></View>
                <View  style = {{alignItems:'center',justifyContent:'center',flex:1, borderWidth:10,
                borderRadius:10,backgroundColor:gameEnd,borderColor:timeElapse,
                }}><Text style= {{fontSize:40,
                color:timeElapse,}}>00:{timeLeft}</Text></View>
            </View>
            <View style={styles.quizBar}>
                <View style={styles.questionView}><Text>{query}</Text></View>
                <View style={styles.choiceView}>
                    <TouchableOpacity style={styles.choiceText} onPress={()=>setTracker(prevTracker=>prevTracker +1)}><Text>{choice1}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.choiceText}><Text>THis is question {tracker + 1} out of {data.length} </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.choiceText} onPress={()=>setTracker(prevTracker=>prevTracker-1)}><Text>Previous question</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    progressBar:{
        flex:0.7,
        backgroundColor:'black',
        flexDirection:'row',
    },
    quizBar:{
        
        flex:4,
        backgroundColor:'black'
    },
    scoreBar:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        borderWidth:5,
        borderRadius:10,
        
        backgroundColor:'white',
    },
    scoreText:{
        fontSize:40,
    },
    questionView:{
        backgroundColor:'lightgreen',
        flex:0.8,
        borderWidth:2,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        
        },
    choiceView:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    },
    choiceText:{
        width:300,
        height:50,
        backgroundColor:'beige',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        margin:25,
    },
})
export default Game