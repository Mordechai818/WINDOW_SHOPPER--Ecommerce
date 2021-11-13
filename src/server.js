const express = require('express');
const app = express();
const path = require('path');
const routesImport = require("../routing/routes");
// const mongoose = require('mongo')

const PORT = 5000;

// MongoClient.connect(url , (err,db)=>{
// if(err) throw err;
// console.log('DB created');
// const WSdb  = db.db('WindowShopperDB');
// WSdb.createCollection('products', (err,res)=>{
// if(err) throw err;
// console.log('collection created')

// })

// WSdb.collection('products').insertMany(arrayOfProduct , (err,res)=>{
// if (err) throw err;
// console.log('I just inserted new documents');
// })

// })


// const public=path.join(__dirname , "..", "public")
app.use(express.static(path.join(__dirname, "..", "public")))

routesImport(app)

app.listen(PORT , (err)=>{
    if(err) {
        console.log
    }
    console.log('listining on port 5000')
})
