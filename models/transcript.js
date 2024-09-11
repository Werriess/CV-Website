import mongoose from "mongoose";

const transcriptSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    }
})

const Transcript = mongoose.model('Transcript', transcriptSchema);
export default Transcript;