import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import dotenv from 'dotenv';
import User from './models/users.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '.env') });

const PORT = process.env.PORT || 8001;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.use('/css', express.static(join(__dirname, 'css')));
app.use('/images', express.static(join(__dirname, 'images')));
app.use('/files', express.static(join(__dirname, 'files')));
app.use('/CVWebsiteFav.ico', express.static(join(__dirname, 'CVWebsiteFav.ico')));

import usersRouter from './routes/index.js';
app.use('/users', usersRouter);

app.get("/contact", (req, res) => {
    res.sendFile(join(__dirname, 'contact.html'));
});

app.post('/submit', async (req, res) => {
    try {
        const { name, email, phone, question } = req.body;

        const newUser = new User({
            name,
            email,
            phone,
            question
        });

        const savedUser = await newUser.save();
        console.log('Saved user:', savedUser);

        res.send('Form data received and saved to database.');
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Error saving user.');
    }
});

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected.');
});
