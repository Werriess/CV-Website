require('dotenv').config()
import express from "express"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { join } from 'path';
import { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 8001;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.use('/css', express.static(join(__dirname, 'css')));

app.use('/images', express.static(join(__dirname, 'images')));

app.use('/files', express.static(join(__dirname, 'files')));

app.use('/CVWebsiteFav.ico', express.static(join(__dirname, 'CVWebsiteFav.ico')));

app.get("/contact", (req, res) => {
    res.sendFile(join(__dirname, 'contact.html'))
})

app.post('/submit', (req, res) => {
    const { fullName, email, phone, message } = req.body;
    console.log(`Full Name: ${fullName}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
    res.send('Form data received and processed.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})