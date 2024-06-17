import express from 'express';
import "reflect-metadata"
import { connect } from "./src/helpers/connectDB";
import userRouter from './src/routes/UserRouter';

const app = express();
app.use(express.json());

app.use("/api/user", userRouter)

app.listen(3000, async () => {
    await connect();
    console.log('Server is running on port 3000');
});