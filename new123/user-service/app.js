const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes');
const { authenticateToken } = require('./middleware');

const app = express();
app.use(bodyParser.json());

app.use('/user', authenticateToken, userRoutes);  // Protected routes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`User service running on port ${PORT}`));
