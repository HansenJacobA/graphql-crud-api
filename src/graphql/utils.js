// Resolver Helper Methods

export const orgValues = (doc) => {
    return {
        id: doc._id,
        name: doc.name
    };
};

export const locValues = (doc) => {
    return {
        id: doc._id,
        name: doc.name,
        address: doc.address,
        latitude: doc.latitude,
        longitude: doc.longitude,
        org: doc.org
    };
};

export const eventValues = (doc) => {
    return {
        id: doc._id,
        name: doc.name,
        date: doc.date,
        time: doc.time,
        description: doc.description,
        org: doc.org
    };
};

export const findOrg = async (input, organization) => {
    const doc = await organization.getOne(input);
    return orgValues(doc);
};
