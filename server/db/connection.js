import mongoose, { connect, mongo } from "mongoose";

const connection =async (password) => {
    const url = `mongodb+srv://masumahmed:${password}@cluster0.w8vybgo.mongodb.net/TodoApp?retryWrites=true&w=majority`

    try {
      await  mongoose.connect(url,{
        useUnifiedTopology:true,
        useNewUrlParser:true
        });
        console.log('database connection established')
    } catch (error) {
        console.log('error while connecting to database' + error)
    }
}

export default connection;