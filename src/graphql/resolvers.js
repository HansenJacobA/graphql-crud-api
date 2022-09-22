import { orgValues, locValues, eventValues, findOrg } from './utils.js';
import { getGeoCode } from '../db/utils/geocode.js';

const resolvers = {
    Query: {
        async getOrg(_, { input }, { organization }) {
            const doc = await organization.getOne(input);
            return orgValues(doc);
        },
        async getLoc(_, { input }, { location }) {
            const doc = await location.getOne(input);
            return locValues(doc);
        },
        async getEvent(_, { input }, { event }) {
            const doc = await event.getOne(input);
            return eventValues(doc);
        }
    },
    Mutation: {
        async createOrg(_, { input }, { organization }) {
            const doc = await organization.createOne(input);
            return orgValues(doc);
        },
        async createLoc(_, { input }, { location }) {
            input = await getGeoCode(input);
            const doc = await location.createOne(input);
            return locValues(doc);
        },
        async createEvent(_, { input }, { event }) {
            const doc = await event.createOne(input);
            return eventValues(doc);
        },
        async deleteOrg(_, { input }, { organization }) {
            const doc = await organization.removeOne(input);
            return orgValues(doc);
        },
        async deleteLoc(_, { input }, { location }) {
            const doc = await location.removeOne(input);
            return locValues(doc);
        },
        async deleteEvent(_, { input }, { event }) {
            const doc = await event.removeOne(input);
            return eventValues(doc);
        },
        async updateOrg(_, { input, change }, { organization }) {
            const doc = await organization.updateOne(input, change);
            return orgValues(doc);
        },
        async updateLoc(_, { input, change }, { location }) {
            const doc = await location.updateOne(input, change);
            return locValues(doc);
        },
        async updateEvent(_, { input, change }, { event }) {
            const doc = await event.updateOne(input, change);
            return eventValues(doc);
        }
    },
    Organization: {
        async location({ id }, _, { location }) {
            const doc = await location.getMany({ org: id });
            return doc.map(loc => locValues(loc));
        },
        async event({ id }, _, { event }) {
            const doc = await event.getMany({ org: id });
            return doc.map(e => eventValues(e));
        }
    },
    Location: {
        org(_, { input }, { organization }) {
            return findOrg(input, organization);
        }
    },
    Event: {
        org(_, { input }, { organization }) {
            return findOrg(input, organization);
        }
    }
};

export default resolvers;
