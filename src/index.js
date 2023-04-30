const PORT = 3000;
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const path = require('path');

app.set(express.json());
app.use(cors());

app.get('/books', async (req,res)=>{
  fs.readFile(path.join(__dirname, 'database.json'), {encoding: 'utf8'}, (err,data)=>{
    if(err) return res.sendStatus(500);

    res.status(200).json(data);
  });
});

app.listen(PORT, ()=>{
  console.log('Server is running at port ' + PORT);
})
