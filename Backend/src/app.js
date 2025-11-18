const express = require('express');
const app = express();
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/ai',aiRoutes);

module.exports = app;