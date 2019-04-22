import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Reward from 'react-rewards'

const VOTE_QUERY = gql`
  mutation vote($articleId: Int!) {
    vote(articleId: $articleId) {
      id
      votes
    }
  }
`

export default function Votes({ article }) {
  let reward

  return (
    <Mutation mutation={VOTE_QUERY}>
      {(vote, { data }) => (
        <div>
          <Reward
            ref={ref => {
              reward = ref
            }}
            type="confetti"
          >
            <a
              className="f6 link dim br-pill ba ph3 pv2 dib dark-pink"
              href="#0"
              onClick={async () => {
                const variables = { articleId: article.id }
                reward && reward.rewardMe()
                await vote({ variables })
              }}
            >
              {article.votes} votes
            </a>
          </Reward>
        </div>
      )}
    </Mutation>
  )
}
