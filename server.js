const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');

// Initiating the app
const app = express();


// Express body-parser
app.use(express.json());

// Mongodb database uri using config
const db = config.get('mongoURI');

// Connecting to the Database
mongoose
        .connect(db, {useNewUrlParser: true, 
        useCreateIndex: true })
        .then(() => console.log('Mongodb Database Connected..'))
        .catch(err => console.log(err));


// Use Routes    
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/tweet', require('./routes/api/tweet'));



// Server Static Assets (build folder) if in production
if (process.env.NODE_ENV === 'production') {
        // set static folder
        app.use(express.static('client/build'));
        app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
}


// Port 
const port = process.env.PORT || 5000;

// Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
