const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projeto2',
    { useUnifiedTopology: true, useNewUrlParser: true });