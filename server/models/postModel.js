const {Schema, model} = require('mongoose')

const postSchema = new Schema({
    title: {type: String, required: true},
    category: {type: String, enum: ['Uncategorized','Agriculture','Tourism&Hospitality',
    'Business','Health&Fitness','Education','Spirituality','Daily Dive','Entertainment','Art','Projects','How To','Product-Features'], message:'{VALUE} is not supported'},
    description: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId,ref:'User'},
    thumbnail: {type: String, required: true},
    
}, {timestamps: true})

module.exports = model('post', postSchema)