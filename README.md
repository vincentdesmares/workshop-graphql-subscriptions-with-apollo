# GraphQL Workshop: Subscriptions with Apollo.

[![PRs Welcome][prs-badge]][prs]

This workshop will help you to discover what are subscriptions and how to use them in your code with the help of Apollo.

This is NodeJS/React workshop.

Orginaly made for [GraphQL @Paris][meetup-url].

It is aimed for poeple already knowing the very basics of GraphQL. Yet, as all the base code is provided, beginners in GraphQL should not be too lost.

This project was bootstrapped with [Create React App][cra].

# Tools & Prerequisites

Here is a list of tools, software and libraries that will be used during the workshop.

| Tool                                     | Documentation                                         | Description                                                                       |
| ---------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------- |
| _Code Editor_                            |                                                       | A JavaScript code editor, [VSCode](https://code.visualstudio.com/) is recommended |
| _Browser_                                |                                                       | A modern browser, [Chrome](https://www.google.com/chrome/) is recommended         |
| [Node.js](https://nodejs.org/en/) (v10+) | [docs](https://nodejs.org/dist/latest-v8.x/docs/api/) | JavaScript server-side. Use nvm to install the version 10.                        |
| [yarn](https://yarnpkg.com)              | [docs][yarn-install]                                  | Used to install third-party dependencies and tools                                |

## Setup

Just type those commands:

```
git clone git@github.com:vincentdesmares/workshop-graphql-subscriptions-with-apollo.git
cd workshop-graphql-subscriptions-with-apollo
yarn
git checkout step-1
yarn dev
```

Your browser should open a new tab with the [Landing page][landing-page].

## Workshop walkthrough

1. Slides part 1: Quick GraphQL recap
2. Slides part 2: Subscriptions, or how to deal with async events
3. Workshop Step 1: Putting in place subscriptions server-side
4. Workshop Step 2: Basic subscriptions with React
5. Workshop Step 3: Filtering and security

## Base branches

For each step there is a base branch you can start from. Master is equivalent to the step 3.
If you could not finish a step in time, you can just checkout the next one and try to solve your issue later.

# Step 1 goal

```
git checkout step-1
```

- Open the [playground][playground-url]
- Add a Subscription called bookAdded
- You must be able to call the subscription in a playground tab
- When you call the addBook mutation in another tab you should see the new book in the subscription tab

# Step 2 goal

```
git checkout step-2
```

- Open the [Landing page][landing-page]
- Open again the [Landing page][landing-page] in another window
- When one clicks on the vote button, the votes must increase in the other window too
- When one clicks on the vote button, the vote animation must run in the other window too

# Step 3 goal

```
git checkout step-3
```

- When an article is added it should appear on all tabs
- Add a 'groupId' field to the article model
- One should only see articles belonging to this group
- One should only receive push data related to his group
- Subscriptions data should only be sent to the matching scopes. Avoid over-sending informations.

## Useful resources

- [Introduction to Subscriptions slides](https://docs.google.com/presentation/d/1CguNFEPa-RGYmL8G-GjBYmx1vU92TuxtAbnZfRyRyZM/edit?usp=sharing)
- [Learning GraphQL](https://www.howtographql.com/)
- [Apollo Server subscriptions](https://www.apollographql.com/docs/apollo-server/features/subscriptions)
- [Apollo Client subscriptions](https://www.apollographql.com/docs/react/advanced/subscriptions)
- [GraphQL Specifications](https://graphql.github.io/graphql-spec/June2018/#sec-Subscription)

## Need help?

You can reach me by [twitter][my-twitter] or by [email][my-email].

[meetup-url]: https://www.meetup.com/fr-FR/parisgraphql/
[cra]: https://github.com/facebook/create-react-app
[yarn-install]: https://yarnpkg.com/en/docs/install#mac-stable
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[landing-page]: http://localhost:3000
[playground-url]: http://localhost:8080/graphql
[my-twitter]: https://twitter.com/cold_lestat
[my-email]: mailto:vincent.desmares@gmail.com
