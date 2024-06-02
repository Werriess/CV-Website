import express from 'express';
import User from '../models/users.js';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const usersRouter = express.Router();

usersRouter.post("/submit", async (req, res) => {
    const { name, email, phone, question } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            phone,
            question
        });

        const savedUser = await newUser.save();
        res.sendFile(join(__dirname, '../views/success.html'));
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Error saving user.' });
    }
});

export default usersRouter;
