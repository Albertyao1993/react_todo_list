import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
    title: string;
    completed: boolean;
    createdAt: Date;
}

const TaskSchema: Schema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter a task title'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<ITask>('Task', TaskSchema);
