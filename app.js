const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/persondata',{useNewUrlParser:true})

const person_schema=new mongoose.Schema(
    {
        name: String,
        age: Number
    }
);

const people_model= mongoose.model("People",person_schema)

const people= new people_model(
    {
        name:'JOhn',
        age: 37
    }
)
 people.save();