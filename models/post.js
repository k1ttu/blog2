import mongoose , {Schema} from "mongoose";



const PostSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            trim:true,
            required: true,
        },
        content:[{
            type:String,
            required:true
        }],
        datePosted:{
            type: Date,
            default:Date.now,
        },
        comments:[
            {
                name:{
                    type:String,
                    default:"Reader"
                },
                comments:{
                    type:String,
                    trim:true,
                }
            }
        ]
    }
);

const Post = mongoose.models.Post || mongoose.model("Post" , PostSchema);

export default Post;