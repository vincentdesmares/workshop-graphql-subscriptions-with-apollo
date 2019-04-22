const { ApolloServer, gql } = require('apollo-server-express')

const { PubSub } = require('apollo-server')

const pubsub = new PubSub()

const ARTICLE_ADDED = 'ARTICLE_ADDED'
const VOTE_ADDED = 'VOTE_ADDED'

// This is a (sample) collection of articles we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const articles = [
  {
    id: 1,
    title: 'Apollo with subscriptions',
    author: 'Vincent Desmares',
    votes: 0
  },
  {
    id: 2,
    title: 'Are Robots our enemies?',
    author: 'Isaac Asimov',
    votes: 0
  }
]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Article" type can be used in other type declarations.
  type Article {
    id: Int
    title: String
    author: String
    votes: Int
  }

  input ArticleInput {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    articles: [Article]
  }

  type Mutation {
    addArticle(article: ArticleInput): Article
    vote(articleId: Int): Article
  }

  type Subscription {
    articleAdded: Article
    voteAdded(articleId: Int): Article
  }
`

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve articles from the "articles" array above.
const resolvers = {
  Query: {
    articles: () => articles
  },
  Mutation: {
    addArticle: (root, args, context) => {
      articles.push(args.article)
      pubsub.publish(ARTICLE_ADDED, { articleAdded: args })
      return args.article
    },
    vote: (root, args, context) => {
      const articleIndex = articles.findIndex(
        article => article.id === args.articleId
      )
      if (articleIndex === -1) {
        throw new Error('Article not found.')
      }
      articles[articleIndex].votes += 1
      pubsub.publish(VOTE_ADDED, { voteAdded: articles[articleIndex] })
      return articles[articleIndex]
    }
  },
  Subscription: {
    articleAdded: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: () => pubsub.asyncIterator([ARTICLE_ADDED])
    },
    voteAdded: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: () => pubsub.asyncIterator([VOTE_ADDED])
    }
  }
}

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const apolloServer = new ApolloServer({ typeDefs, resolvers })

module.exports = apolloServer
