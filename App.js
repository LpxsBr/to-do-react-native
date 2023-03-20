import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [activitie, setActivitie] = useState([])
  const [toDo, setToDo] = useState([])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
      style={{width: 300,display: 'flex', gap: 10}}>
        <TextInput
        style={{
          width: 300,
          height: 50,
          backgroundColor: '#f1f1f1',
          padding: 10,
          borderWidth: 1
        }}
        onChangeText={(event)=>{
          console.log(event)
          setActivitie(event)
        }} value={activitie}></TextInput>

        <Button
        style={{width: 300, height: 50}}
        title='add'
        onPress={()=>{
          setToDo((prev)=>[...prev, activitie])
          setActivitie()
          }}></Button>

        <Button
        style={{width: 300, height: 50}}
        title='remove all'
        onPress={()=>{
          setToDo([])
          }}></Button>
          
        <View>
          {
            toDo.map((activie)=>(
              <Text
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
                borderRadius: 10,
                width: 300,
                height: 40,
                backgroundColor: 'pink',
                color: 'white'
              }}>{activie}</Text>))
          }
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
