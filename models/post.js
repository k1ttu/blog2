var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        content: [{
            type: String,
            trim:true
        }],
        datePosted:{
            type:String,
            default:Date.now()
        }
    },
    {
        timestamps:true
    }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);