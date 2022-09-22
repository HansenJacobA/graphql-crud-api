import { Location } from '../loc.model.js';

const { name, address, latitude, longitude, org } = Location.schema.obj

describe('Location model', () => {
    describe('schema', () => {
        test('name', () => {
            expect(name).toEqual({
                type: String,
                required: true,
                trim: true,
                maxlength: 50
            });
        });

        test('address', () => {
            expect(address).toEqual({
                type: String,
                required: true,
                trim: true
            });
        });

        test('latitude', () => {
            expect(latitude).toEqual({
                type: Number,
                default: 0
            });
        });

        test('longitude', () => {
            expect(longitude).toEqual({
                type: Number,
                default: 0
            });
        });

        test('org', () => {
            expect(org).toEqual({
                type: String,
                required: true,
                trim: true,
                maxlength: 50
            });
        });
    });
});
