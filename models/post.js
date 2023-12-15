import mongoose from "mongoose";

const {Schema} = mongoose;
const PostSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        content: [{
            type: String
        }],
        datePosted:{
            type:Date,
            default:Date.now()
        },
        comments: [
            {
                name: {
                    type: String
                },
                comment: {
                    type: String,
                    trim: true,
                }
            }
        ]
    },
    {
        timestamps:true
    }
);

export default mongoose.model("Post" , PostSchema);