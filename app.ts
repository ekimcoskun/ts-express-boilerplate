import express from 'express';
import "reflect-metadata"
import { connect } from "./src/helpers/connectDB";
import userRouter from './src/routes/UserRouter';
import Http from './src/middlewares/Http';

const app = express();

Http.mount(app);

app.use(express.json());

app.use("/api/user", userRouter)

app.listen(3000, async () => {
    await connect();
    console.log('Server is running on port 3000');
});