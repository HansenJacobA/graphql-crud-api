import { Event } from '../event.model.js';

const { name, date, time, description, org } = Event.schema.obj;

describe('Event model', () => {
    describe('schema', () => {
        test('name', () => {
            expect(name).toEqual({
                type: String,
                required: true,
                trim: true,
                maxlength: 50
            });
        });

        test('date', () => {
            expect(date).toEqual({
                type: String,
                required: true,
                default: "No date."
            });
        });

        test('time', () => {
            expect(time).toEqual({
                type: String,
                required: true,
                default: "No time."
            });
        });

        test('description', () => {
            expect(description).toEqual({
                type: String,
                required: true,
                default: "No description."
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
