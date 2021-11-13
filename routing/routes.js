const mongoDB = require('mongodb');
// const { mongo, Collection } = require('mongoose');
const MongoClient = mongoDB.MongoClient
const url = "mongodb://localhost:27017/";
const ObjectId = mongoDB.ObjectId;
const DBname = 'WindowShopperDB';
const CollName = 'products';


const routes = (app)=>{
    app.get('/', (req,res)=>{
        
    })

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
            wsdb.collection(CollName).find({}).toArray((err,productsOK)=>{
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
};





module.exports = routes