import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, ListView, TouchableOpacity } from 'react-native'
import movies from './moviesDB'
import Icon from 'react-native-vector-icons/Ionicons'

class MovieIndex extends Component {

  constructor(props) {
      super(props)
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
      this.state = {
        movieDataSource: ds.cloneWithRows(Object.keys(movies.titles))
      }
  }

  _navigateToMovie(movie) {
    this.props.navigator.push({ident:'movie', movie});
  }

  _renderMovieRow(movie) {
    return (
      <TouchableOpacity style={styles.row} onPress={() => this._navigateToMovie(movie)}>
        <Text>{movie}</Text>
        <View style={{flex: 1}} />
        <Icon name="md-film" size={20} color="black" />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.welcome}>
          Welcome to React Native, Benni!
        </Text>
        <ListView dataSource={this.state.movieDataSource}
                  renderRow={this._renderMovieRow.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 25,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20
  },
})

export default MovieIndex
