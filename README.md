## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a Node.JS server with a GraphQL based API that has the abilities to Create, Read, Update, & Delete Locations & Events. This API is also able to query and find all the locations & events belonging to an organization, as well as the reverse: being able to query a location(s) / event(s) and having the ability to find the organization it belongs to. When a user submits a location with an address, the latitude & longitude is gathered via the Google Places API.

To utilize this API:
- Install dependencies - '''npm i'''
- Define .env variables (Google Places API token & db url)
- Start database and Apollo server - '''npm start'''
- Open [Apollo playground](https://studio.apollographql.com/sandbox/explorer) to use API

### Links

- [API GitHub Repository](https://github.com/HansenJacobA/graphql-crud-api)

## My process
- Learn GraphQL
- Learn Apollo Server
- Design GraphQL and MongoDB Schemas
- Create MongoDB database
- Create Apollo Server
- Create GraphQL Schema, Query, and Mutation
- Create GraphQL CRUD functionality on database
- Create cyclic graph query relations in GraphQL
- Create tests to ensure consistency of working state
- Learn Google Places API and integrate its' service

### Built with

- Node.JS
- Apollo
- GraphQL
- Axios
- Jest

### Continued development

- Handling client errors (throwing descriptive errors to the client)
- Handling api authentication
- Create performance monitors and refactor
- Utilize caching / Apollo Data sources
- Implement server logs using directives
- Increase test coverage

### Useful resources

- [Frontend Masters GraphQL Course](https://frontendmasters.com/courses/server-graphql-nodejs)
- [Frontend Masters Advanced GraphQL Course](https://frontendmasters.com/courses/advanced-graphql-v2/)
- [Node.js](https://nodejs.org/en/)
- [Mongoose](https://mongoosejs.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Jest](https://jestjs.io/)

## Author

- [Portfolio](https://hansenjacoba.github.io/)
- [LinkedIn](https://www.linkedin.com/in/jacob-andrew-hansen/)
- [GitHub](https://github.com/HansenJacobA)
