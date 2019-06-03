import React, {Component} from 'react';
import {View, Text, StyleSheet , StatusBar} from 'react-native';
import Button from '../Button';
class Timer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle = {'light-content'}/>
                <View style={styles.upper}>
                    <Text style = {styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName = 'play-circle' onPress= {()=> alert('시작버튼')} ></Button>
                    <Button iconName = 'stop-circle' onPress= {()=>alert('멈추는버튼')}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : '#ce0b24',
        alignItems : 'center'
    },
    upper : {
        flex :2,
        justifyContent:'center',
        alignItems : 'center'
    },
    lower: {
        flex :1 ,
        justifyContent:'center'
    },
    time : {
        color : 'white',
        fontSize : 120,
        fontWeight : '100'
    }
})
export default Timer;