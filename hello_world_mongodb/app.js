var MongoClient = require('mongodb').MongoClient;

// Abrindo a conexão para o servidor
MongoClient.connect('mongodb://localhost:27017/text', function(err, db){

    if(err) throw err;

    // Find one document in our colletion
    db.colletion('coll').findOne({}, function(err, doc){

        if(err) throw err;

        // Print the result
        console.dir(doc);

        // Close th DB
        db.close();
    });

    // Declare success
    console.dir("Called findOne!");
});

