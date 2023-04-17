const mongoose=require("mongoose")


const authorSchema=mongoose.Schema({

    name: {type: String, required: true},
    numberOfComponents: {type: Number, required:true},
   componentsNames: [{type: String}],
    genre: [{type:String}],
    country: {type: String},
    discography: [{type: String}],
    image: {type: String},
    description: {type: String}
})

const Author=mongoose.model("author", authorSchema)
module.exports=Author