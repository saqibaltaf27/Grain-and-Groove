const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const calculatorRoutes = require('./routes/calculator');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
