const mongoose = require('mongoose');

const FilialesSchema = new mongoose.Schema({
    filialeTitle: {
        type: String,
        required: true,
    },
    filialeDesc: {
     type: String,
     required: true,
    },
});

const filiale = mongoose.model('filiale', FilialesSchema);

module.exports = filiale;