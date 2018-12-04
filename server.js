var express = require("express");
var bodyParser = require('body-parser')
var app = express();
var jsonParser = bodyParser.json();

var posts = [
    {
        "id" : "1",
        "title" : "Sample Blog Post",
        "author" : "Derrick Minor",
        "dateCreated" : "11/2/2018, 6:27:63 PM",
        "body" : "Sample body content of a post",
        "comments" : [
            {
                "name" : "Teresa Carter",
                "email" : "teresacarter@dummyemail.com",
                "message" : "Cool work"
            }
        ]
    },
    {
        "id" : "2",
        "title" : "Second Sample Blog Post",
        "author" : "Derrick Minor",
        "dateCreated" : "12/1/2018, 3:09:13 AM",
        "body" : "Sample body content of a post",
        "comments" : [
            {
                "name" : "Brad Hammond",
                "email" : "bradhammond@dummyemail.com",
                "message" : "Nice post"
            }
        ]
    }
];

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.set('view engine', 'html');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/api/posts", (req, res, next) => {
    res.json(posts);
   });

app.get("/api/posts/:id", function(req, res) {
    for(var i = 0; i < posts.length; i++) {
        if(posts[i].id == req.params.id) {
            res.json(posts[i]);
        }
    }
});

app.post("/api/posts", jsonParser, function(req, res) {
    console.log(req.body);
    posts.push(
        {
            "id" : req.body.id,
            "title" : req.body.title,
            "author" : req.body.author,
            "dateCreated" : req.body.dateCreated,
            "body" : req.body.body,
            "comments" : req.body.comments
        }
    );
    res.end(JSON.stringify(req.body, null, 2))
});

app.delete("api/posts/:id", function(req, res) {
    for(var i = 0; i < posts.length; i++) {
        if(posts[i] == req.body) {
            posts.splice(i, 1);
        }
    }
});