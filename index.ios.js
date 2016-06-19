import React, { Component } from 'react'
import { AppRegistry, Text, View, TabBarIOS, Navigator} from 'react-native'
import MovieIndex from './app/movieIndex'
import Movie from './app/movie'

class bio extends Component {

  _renderScene(route, navigator) {
   var globalNavigatorProps = { navigator }

    switch (route.ident) {
      case "index":
        return <MovieIndex {...globalNavigatorProps} />
      case "movie":
        return <Movie movie={route.movie} {...globalNavigatorProps} />
      default:
        return <Text>{`Not implemented: ${route.ident}`}</Text>
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ident:"index"}}
        renderScene={this._renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('bio', () => bio);
