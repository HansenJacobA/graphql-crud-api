import { gql } from 'apollo-server';

const typeDefs = gql`

    type Organization {
        id: ID!
        name: String!
        location: [Location]!
        event: [Event]!
    }

    type Location {
        id: ID!
        name: String!
        address: String!
        latitude: Float!
        longitude: Float!
        org: Organization!
    }

    type Event {
        id: ID!
        name: String!
        date: String!
        time: String!
        description: String!
        org: Organization!
    }

    input OrgInput {
        name: String!
    }

    input LocInput {
        name: String!
        street: String!
        city: String!
        state: String!
        org: ID!
    }

    input EventInput {
        name: String!
        date: String
        time: String
        description: String
        org: ID!
    }

    input IdInput {
        _id: String!
    }

    type Query {
        getOrg(input: IdInput!): Organization!
        getLoc(input: IdInput!): Location!
        getEvent(input: IdInput!): Event!
    }

    type Mutation {
        createOrg(input: OrgInput!): Organization!
        createLoc(input: LocInput!): Location!
        createEvent(input: EventInput!): Event!

        deleteOrg(input: IdInput!): Organization!
        deleteLoc(input: IdInput!): Location!
        deleteEvent(input: IdInput!): Event!

        updateOrg(input: IdInput!, change: OrgInput): Organization!
        updateLoc(input: IdInput!, change: LocInput): Location!
        updateEvent(input: IdInput!, change: EventInput): Event!
    }
`;

export default typeDefs;
