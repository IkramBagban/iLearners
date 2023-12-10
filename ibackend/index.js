const express = require('express')


const app = express();
const PORT = process.env.PORT  || 8080;

app.get('/', (req,res,next)=>{
    res.send('hello')
})


app.listen(PORT , () => {
    console.log(`PORT is listening on ${PORT}`);
})