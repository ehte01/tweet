import mongoose from 'mongoose'

export const connectToDatabase = () => {
    mongoose.connect('mongodb+srv://ehteahmad:0gvXTN5yq8HrSluS@cluster0.h5s6ofc.mongodb.net/twit').then(()=>{
    console.log('connected to mongodb database');
    }).catch(()=>{
        console.log('problem connected to mongodb database');
    })
}