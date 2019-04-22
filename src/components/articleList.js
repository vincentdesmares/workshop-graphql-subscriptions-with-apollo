import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Article from './article'

export default function ArticleList({ articles }) {
  return (
    <section className="mw7 center avenir">
      <h2 className="baskerville fw1 ph3 ph0-l">Articles</h2>
      <Query
        query={gql`
          {
            articles {
              id
              title
              author
              votes
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return data.articles.map(article => (
            <Article article={article} key={article.id} />
          ))
        }}
      </Query>
    </section>
  )
}
