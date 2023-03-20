import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Switch, Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [activitie, setActivitie] = useState([])
  const [toDo, setToDo] = useState([])
  const [empty, setEmpty] = useState(null)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const activitieHandler = (event) => {
    setActivitie(String(event))
    setEmpty()
  };
  const toDoHandler = () => {
    if (!activitie) {
      setEmpty('Campo vázio :)')
    }
    else {
      setToDo((prev) => [...prev, activitie])
      setActivitie()
    }
  }

  const cleanInputHandler = () => setToDo([]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          width: 300,
          display: 'flex',
          gap: 10
        }}>
        <TextInput
          style={{
            width: 300,
            height: 50,
            backgroundColor: '#f1f1f1',
            padding: 10,
            borderWidth: 1
          }}
          onChangeText={activitieHandler}
          value={activitie}></TextInput>

        <Text
          style={{
            color: 'red'
          }}>{empty}</Text>

        <Button
          style={{ width: 300, height: 50 }}
          title='add'
          onPress={toDoHandler}></Button>

        <Button
          style={{ width: 300, height: 50 }}
          title='remove all'
          onPress={cleanInputHandler}></Button>

        <View style={{
          display: 'flex',
          gap: 10
        }}>
          {
            !toDo
              ? <Text>Nenhum item aqui</Text>
              : toDo.map((activie, key) => (
                <Pressable
                  key={key}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    borderRadius: 10,
                    width: 300,
                    height: 40,
                    backgroundColor: `pink`,
                    color: 'white'
                  }}>
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      width: 200,
                      padding: 10
                    }}>{activie}</Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </Pressable>))
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
