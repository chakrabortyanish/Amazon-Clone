import  dotenv from 'dotenv'  
dotenv.config()
import express from "express"
import { dbConnection } from "./db/connection.js";
import { router } from "./routes/User.js";
import cors from "cors"

const app = express();
 
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(cors({
  origin: 'https://amazon-clone-frontend-c5k8.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

dbConnection();

app.use("/user", router);

app.listen(PORT,()=> console.log(`Server started at PORT : ${PORT}`));
