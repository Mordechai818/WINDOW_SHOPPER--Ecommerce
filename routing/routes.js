const mongoDB = require('mongodb');
// const { mongo, Collection } = require('mongoose');
const MongoClient = mongoDB.MongoClient
const url = "mongodb://localhost:27017/";
const ObjectId = mongoDB.ObjectId;
const DBname = 'WindowShopperDB';
const CollName = 'products';
 
const routes = (app)=>{
    app.get('/movies', (req,res)=>{
        MongoClient.connect(url , (err,storgeDB)=>{
            if(err) throw err;
            const wsdb = storgeDB.db(DBname);
            wsdb.collection(CollName).find({}).toArray((err,productsOK)=>{
                if(err) throw err;
                res.send(productsOK)
            })
        })
    })



    app.get('/music', (req,res)=>{
        MongoClient.connect(url , (err,storgeDB)=>{
            if(err) throw err;
            const wsdb = storgeDB.db(DBname);
            wsdb.collection(CollName).find({}).toArray((err,productsOK)=>{
                if(err) throw err;
                res.send(productsOK)
            })
        })
    })

    app.get('/tv_shows', (req,res)=>{
        MongoClient.connect(url , (err,storgeDB)=>{
            if(err) throw err;
            const wsdb = storgeDB.db(DBname);
            wsdb.collection(CollName).find({}).toArray((err,productsOK)=>{
                if(err) throw err;
                res.send(productsOK)
            })
        })
    })

    app.get('/videos_games', (req,res)=>{
        MongoClient.connect(url , (err,storgeDB)=>{
            if(err) throw err;
            const wsdb = storgeDB.db(DBname);
            wsdb.collection(CollName).find({}).toArray((err,productsOK)=>{
                if(err) throw err;
                res.send(productsOK)
            })
        })
    })

    app.get('/cart', (req,res)=>{
        MongoClient.connect(url , (err,storgeDB)=>{
            if(err) throw err;
            const wsdb = storgeDB.db(DBname);
            wsdb.collection("cart").find({_id:ObjectId("61902eb4aeb959a531f387a6")}).toArray((err,productsOK)=>{
                if(err) throw err;
                res.send(productsOK)
            })
        })
    })
    app.patch('/deleteCartProduct/:id',(req,res)=>{
        const ID=req.params.id
        console.log(ID);
        MongoClient.connect(url , (err,storgeDB)=>{
            if(err) throw err;
            const wsdb = storgeDB.db(DBname);
            wsdb.collection("cart").findOneAndUpdate({_id:ObjectId("61902eb4aeb959a531f387a6")},{$pull:{products:{_id:ID}}},(err,productsOK)=>{
                if(err) throw err;
                res.send(productsOK)
            })
        })
    })

    app.get("/addToCart/:id",(req,res)=>{
        const ID=req.params.id
        MongoClient.connect(url , (err,storgeDB)=>{
            if(err) throw err;
            const wsdb = storgeDB.db(DBname);
            wsdb.collection(CollName).findOne({_id:ObjectId(ID)},(err,productsOK)=>{
                if(err) throw err;
                res.send(productsOK)
            }) 
    })
})
app.patch("/addToCart",(req,res)=>{
    NEWproduct=req.body
    MongoClient.connect(url , (err,storgeDB)=>{
        if(err) throw err;
        const wsdb = storgeDB.db(DBname);
        wsdb.collection("cart").findOneAndUpdate({_id:ObjectId("61902eb4aeb959a531f387a6")},{$push:{products:NEWproduct}},(err,productsOK)=>{
            if(err) throw err;
            res.send(productsOK)
        }) 
})
})
    app.get('/addProduct', (req,res)=>{
        MongoClient.connect(url , (err,storgeDB)=>{
            if(err) throw err;
            const wsdb = storgeDB.db(DBname);
            wsdb.collection(CollName).find({}).toArray((err,productsOK)=>{
                if(err) throw err;
                res.send(productsOK)
            })
        })
    })


    app.get('*', (req,res)=>{
        res.send('error')
    })
}





module.exports = routes