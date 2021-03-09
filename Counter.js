import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { tambahCounter, kurangCounter} from './redux/action'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(data => data.counter);
  
  return (
    <View>
      <View style={{alignItems: 'center', paddingBottom: 30, paddingTop: 50, backgroundColor:'yellow', height: 130}}>
          <Text style = {{fontSize: 30, fontWeight:'bold', justifyContent: 'center', color:'#E12B1C'}}>PAPAN SCORE</Text>
      </View>
      <View style = {{backgroundColor: 'pink', height: 400}}>
      <Text style = {{textAlign: 'center', paddingTop: 50, padding: 20, fontSize: 30}}>Tim A</Text>
      <View style={{flex:1, justifyContent: 'center',flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#DDDDDD', paddingBottom: 5,                  paddingLeft: 20, paddingRight: 20, height: 65}} onPress={()=>dispatch(kurangCounter(counter))}>
            <Text style={{fontSize: 40}}>-</Text>
        </TouchableOpacity>
          <Text style = {{fontSize: 50, marginLeft: 20, marginRight: 20}}>{counter}</Text>
    
          <TouchableOpacity style={{backgroundColor: '#DDDDDD', paddingBottom: 5,                  paddingLeft: 20, paddingRight: 20, height: 65}} onPress={()=>dispatch(tambahCounter(counter))}>
            <Text style={{fontSize: 40}}>+</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style = {{height: 120, backgroundColor: '#3F3534', padding: 50}}>
        <Text style = {{textAlign:'center'}}>
          copyright - dede rodhatul farida 2021
        </Text>
      </View>
  </View>
  );
}

export default Counter;


