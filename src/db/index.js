import { connect } from './db.js';
import event from './resources/event/event.controller.js';
import location from './resources/location/loc.controller.js';
import organization from './resources/organization/org.controller.js';

export const models = {
    event,
    location,
    organization
};

export default connect;
