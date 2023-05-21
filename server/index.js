import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/api.js';
import connection from './db/connection.js';


const app = express();
dotenv.config();


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/',router)

const port = process.env.PORT ||2001;
const password = process.env.PASSWORD ;


connection(password)
app.listen(port , ()=> {
    console.log(`server listening on port ${port}`)
})

