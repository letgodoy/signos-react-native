import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import signos from './signo.json'

export default class ListaSigno extends React.Component {

  render() {
    return (
 
      <View style={styles.container}>
        {signos.map((signo, key) => (
          <Button key={key} title={signo.nome} onPress={() => this.props.history.push('/' + key)} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5c5c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
