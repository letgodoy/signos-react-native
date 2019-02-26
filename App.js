import React from 'react'
import { View, StyleSheet } from 'react-native'
import ListaSigno from './ListaSigno'
import DetalhesSigno from './DetalhesSigno'
import { NativeRouter as Router, Switch, Route } from 'react-router-native'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            <Route path='/:idSigno' component={ DetalhesSigno } />
            <Route path='/' component={ ListaSigno } />
          </Switch>
        </View>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
