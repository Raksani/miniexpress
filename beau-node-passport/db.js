const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/beau-node-passport', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
