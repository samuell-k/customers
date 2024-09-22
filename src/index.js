const express  = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const {v4:uuidv4} = require('uuid');
const data = uuidv4();
const PORT =9000;

const customers = [
    {
"name":"samuel",
"company":"Afritech ltd"


    },
    {

"name":"samuel",
"company":"Afritech ltd"

    },
    {
"name":"samuel",
"company":"Afritech ltd"

    }
]

app.get('/',(req,res)=>{
    res.send("welcome!");
})


app.get('/api/customers',(req,res)=>{
    res.send({"customers":customers})

})


app.get('/unique',(req,res)=>{

    res.send(data);
})



app.post('/customer/api',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})


app.post('/ip/headers',(req,res)=>{
    console.log(req.headers)
    res.send(req.headers)
})




app.listen(PORT,()=>{
    console.log("server is listening on port of :",PORT);
})

console.log("your unique id is :",data);

