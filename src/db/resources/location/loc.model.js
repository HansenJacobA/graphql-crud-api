import mongoose from 'mongoose';
import { Organization } from '../organization/org.model.js';

const locationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        latitude: {
            type: Number,
            default: 0
        },
        longitude: {
            type: Number,
            default: 0
        },
        org: {
            type: mongoose.ObjectId,
            ref: Organization,
            required: true
        }
    },
    { timestamps: true }
);

locationSchema.index({ name: 1, address: 1, org: 1 }, { unique: true });

export const Location = mongoose.model('location', locationSchema);
