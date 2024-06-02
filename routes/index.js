import express from "express";
const usersRouter = express.Router();

import User from '../models/users.js';

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
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Error saving user.' });
    }
});

usersRouter.get("/view", async (req, res) => {
    try {
        const foundUsers = await User.find();
        res.json(foundUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users.' });
    }
});

export default usersRouter;
