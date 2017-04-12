import React from 'react'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Actions, Scene, Router } from 'react-native-router-flux'

import Pokedex from './components/Pokedex'
import PokemonPage from './components/PokemonPage'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj1eeauwv4suh019801wxy297'}),
})

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='pokedex' component={Pokedex} title='Pokedex' initial={true} type='replace' />
    <Scene key='pokemonPage' title='Edit Pokemon' component={PokemonPage} />
  </Scene>
)

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router scenes={scenes}/>
      </ApolloProvider>
    )
  }
}
