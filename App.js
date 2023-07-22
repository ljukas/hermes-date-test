import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import spacetime from 'spacetime'

// array of 600 items
const arr = Array.from(Array(600).keys())


export default function App() {

  const time = useMemo(() => {
    const now = performance.now()
    arr.forEach((item, index) => {
      spacetime('2015-05-25').add(index, 'days')
    })
    const end = performance.now()

    console.log('spacetime ms', end - now)
    return end - now
  }, [])

  const time2 = useMemo(() => {
    const now = performance.now()
    arr.forEach((item, index) => {
      const initial = new Date('2015-05-25').getTime()
      new Date(initial+ index * 86400000)
    })
    const end = performance.now()

    console.log('date ms', end - now)
    return end - now
  },[])

  return (
    <View style={styles.container}>
      <Text>Spacetime took {time} ms</Text>
      <Text>Date took {time2} ms</Text>
      <StatusBar style="auto" />
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
