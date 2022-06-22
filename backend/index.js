const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

const filialeModel = require('./models/Filiales');

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/TGCC', {
    useNewUrlParser: true,
}).then(console.log('connected succesfully'));

app.post('/insert', async (req, res) => {
    const filialeTitle = req.body.filialeTitle;
    const filialeDescription = req.body.filialeDescription;
    const filiale = new filialeModel({ 
        filialeTitle: filialeTitle,
        filialeDesc: filialeDescription
    });

    try{
        await filiale.save();
    } catch(err){
        console.log(err);
    }
    res.send('Data inserted!');
})

app.get('/showFiliales', async (req, res) => {
    filialeModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        }

        res.send(result);
    })
})

app.listen(3001, () => {
    console.log('Server started at port 3001');
});