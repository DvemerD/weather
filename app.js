const express = require('express');
const path = require('path');
process.env['NODE_CONFIG_DIR'] = path.join(__dirname, 'config/')
const config = require('config');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/cities', require('./routes/city.routes'));

app.use(express.static(path.join(__dirname, 'client', 'build')));

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();