import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import movies from './moviesDB'

class Movie extends Component {

  render() {
    var m = movies.titles[this.props.movie]
    console.log(m)

    return (
      <View style={styles.container}>
        <Text>{this.props.movie}</Text>
        <Text style={styles.rating}>{m.rating}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
  },

  rating: {
    fontSize: 24,
    color: "blue"
  }
})

export default Movie
