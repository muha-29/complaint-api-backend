
import { Schema, model, Document } from 'mongoose';

export interface IIssue extends Document {
  title: string;
  description: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  photoUrl: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  user: Schema.Types.ObjectId;
}

const issueSchema = new Schema<IIssue>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    photoUrl: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Resolved'], default: 'Pending' },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

issueSchema.index({ location: '2dsphere' });

export default model<IIssue>('Issue', issueSchema);
