import { Schema, model, models } from "mongoose";

const TermSchema = new Schema({
    term: {
        type: String,
        unique: true,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    links: {
        type: [String],
        required: false
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date
    }
});

const TermModel = models.Term || model("Term", TermSchema);

export default TermModel;