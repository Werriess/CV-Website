import express from 'express';
import Transcript from '../models/transcript.js';

const transcriptRouter = express.Router();

transcriptRouter.post("/submit", async (req, res) => {
    const{fullName, email, reason} = req.body;

    try {
        const newTransRequest = new Transcript({
            fullName,
            email,
            reason
        })

        const savedRequest = await newTransRequest.save();
        if (savedRequest) {
            res.status(200).json({ message: 'Request has been sent successfully.' });
        }

    } catch (error) {
        console.error('Error saving request:', error);
        res.status(500).json({ message: 'Error saving request.' });
    }
})

export default transcriptRouter;