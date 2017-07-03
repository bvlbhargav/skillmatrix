var dbconnections = require("../config/connections.js")
var mongoUtil = require('../config/mongoUtil.js')



module.exports = function (app, express) {


    //var userCollection = db.collection('userskills');
    app.get('/apitest', function (req, res) {
        res.end("Test API Method is working");
    })

    app.get('/user/skills', function (req, res) {
        var db = mongoUtil.getDb();
        db.collection('userskills').find().toArray(function (err, items) {
            if (err) throw err;
            console.log("Intiating reading user skills");
            res.end(JSON.stringify(items));
            console.log("Fetching user skills completed");
        });
    })

    app.post('/user/skills', function (req, res) {
        //userCollection.insert()
        // console.log(req); // your JSON
        var db = mongoUtil.getDb();
        db.collection('userskills').insert(req.body);
        res.send(req.body); // echo the result back
    })

    app.put('/user/skills/:user_id', function (req, res) {
        var db = mongoUtil.getDb();
         db.collection('userskills').findOneAndUpdate(
             {"userid": req.params.user_id},
             {$set: req.body
        })
        res.end("Updated document")
    })

    app.delete('/user/skills', function (req, res) {
        res.end("Updating user skills yet to be implemented")
    })
};