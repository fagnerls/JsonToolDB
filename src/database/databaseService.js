import JsonData from "../jsonData/sample.data"

var Datastore = require('nedb');

  var db = new Datastore();

//db = {};
//db.test = new Datastore({filename:'/src/database/data/test1.db', autoload: true });

//db.test = new Datastore({filename:'/src/database/data/test1.db'});


// You need to load each database (here we do it asynchronously)
//db.test.loadDatabase();

var defaultUsers = ["Brad Pittt", "Ed Norton", "Denzel Washington"];
var users = defaultUsers.slice();
var sdJson = JsonData;

setup();

function setup1() {
  var dbUsers = [];

  db.remove({}, { multi: true }, function(err, numRemoved) {
    for (var i = 0; i < users.length; i++) {
      // loop through all users
      db.remove({ name: users[i] });
    }
    //db.test.insert(dbUsers, function(err, newDocs)
    db.insert(sdJson, function(err, newDocs){
      // add initial users to the database
    });
  });
}


export function listUser1(){
 // db.test.find({ name: "Brad Pitt" })
 db.find({ transactionType: "CREDIT" })
  .exec(function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log('Got results: ', result);
    }
});
}

function setup() {

    db.insert(sdJson, function(err, newDocs){
      // add initial users to the database
      console.log(newDocs)
    });
}


export function listUser(){
  // db.test.find({ name: "Brad Pitt" })
  db.find({ "carbon.systemInfo.countryCode": { $exists: true }}, function (err, docs) {
    console.log(docs)
});

 }
