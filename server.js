const express = require('express')
const app = express ()

app.use(express.json());

let total = 0;

app.get('/calculator', (req, res) => {
    res.status(200).json({total});
});

app.post('/calculator', (req, res) => {
    const number = req.body.number; 
    const operation = req.body.operation;
    
    if (operation === 'add') {
        total += number; 
    } else if (operation === 'subtract') {
        total -= number; 
    } else if (operation === 'multiply'){
        total -= number;
    } else if (operation === 'divide') {
        total /= number; 
    } else {
        return res.status(400).json({error: 'invalid operation'})
    }
    res.status(200).json({total});

});


app.delete('/calculator', (req, res) => {
    total = 0; 
    res.status(200).json({total, msg: "Total Reset"}) //in order to send the message will need 200 status code 

}); 



const PORT = 4000;
app.listen(PORT, () => {
    console.log("listening on port 4000")
})