import express from 'express';
import "reflect-metadata"
import { connect } from "./src/helpers/connectDB";

const app = express();
app.use(express.json());

app.listen(3000, async () => {
    await connect();
    console.log('Server is running on port 3000');
});