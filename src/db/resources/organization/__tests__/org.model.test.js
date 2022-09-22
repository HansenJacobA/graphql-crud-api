import { Organization } from '../org.model.js'

const { name } = Organization.schema.obj;

describe('Organization model', () => {
    describe('schema', () => {
        test('name', () => {
            expect(name).toEqual({
                type: String,
                required: true,
                trim: true,
                maxlength: 50
            });
        });
    });
});
