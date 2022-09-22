import mongoose from 'mongoose';

const organizationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        }
    },
    { timestamps: true }
);

organizationSchema.index({ name: 1 }, { unique: true });

export const Organization = mongoose.model('organization', organizationSchema);
