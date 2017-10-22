import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export interface Props { }
export interface State { }

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a test</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}
