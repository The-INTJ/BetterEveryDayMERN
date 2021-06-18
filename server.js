const express = require ('express');
const connectDB = require('./config/db');

const app = express();

// Connecting datbase
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Definning routes
app.use('/api/users', require('./routes/api/users'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server start on port ' + PORT));