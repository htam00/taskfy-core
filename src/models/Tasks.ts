import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

interface ITasks extends Document {
    title: string,
    description: string,
}

const TasksSchema: Schema = new Schema({
    title: { type: String }, description: { type: String }
});

export default mongoose.model<ITasks>("Tasks", TasksSchema);