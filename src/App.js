import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'

import client from './client'

import ArticleList from './components/articleList'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="pt5">
          <ArticleList />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
