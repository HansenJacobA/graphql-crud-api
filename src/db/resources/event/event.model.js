import mongoose from 'mongoose';
import { Organization } from '../organization/org.model.js';

const eventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        date: {
            type: String,
            required: true,
            default: "No date."
        },
        time: {
            type: String,
            required: true,
            default: "No time."
        },
        description: {
            type: String,
            required: true,
            default: "No description."
        },
        org: {
            type: mongoose.ObjectId,
            ref: Organization,
            required: true
        }
    },
    { timestamps: true }
);

eventSchema.index({ name: 1, org: 1 }, { unique: true });

export const Event = mongoose.model('event', eventSchema);
