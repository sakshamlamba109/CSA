const exp = require("constants");
var express = require("express");
var path = require("path");

var app = express();
var sql = require("mysql");

var fileupload = require("express-fileupload")
app.use(fileupload());

app.use(express.static("public"));

app.listen(5151, function () {
    console.log("Server Started");
})

app.get("/", function (req, resp) {
    var filepath = path.join(path.resolve(), "public", 'index.html');
    resp.sendFile(filepath);
})


var dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "upescsa",
}

var dbcon = sql.createConnection(dbConfig);
dbcon.connect(function (err, req, resp) {
    if (err)
        console.log("Nada");
    else
        console.log("Tada");
})
app.use(express.urlencoded({ extended: true }));

app.post("/submit", function (req, resp) {
    if (req.files == null) {
        resp.send("Pls Attach the ss");
    }
    else {
        //for uploading file in server
        req.body.ss = req.files.ss.name;
        var data = path.join(path.resolve(), "public", "uploads", req.files.ss.name);
        req.files.ss.mv(data);
    }
    var data = [req.body.firstname, req.body.email, req.body.mobile, req.body.sapid, req.body.batch, req.body.dob, req.body.branch, req.body.mop, req.body.tid, req.body.sex, req.body.ss];
    dbcon.query("insert into registeration values(?,?,?,?,?,?,?,?,?,?,?)",data,function(err,result){
        if(err)
            resp.send(err.message);
        else
            resp.send("Thankyou for Registering See ya on board");
    })
})

