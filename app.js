const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// initialize body parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));
app.use(require('./routes/api/books'));
app.use(require('./routes/api/employee.routes'));
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));