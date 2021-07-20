const sqlite3 = require('sqlite3').verbose();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});




let db = new sqlite3.Database('hw4.db', err => {
    if (err)
        console.log(err.message);
    readline.question('enter product id: ', id => {

        db.serialize(() => {

            db.each(`SELECT * from products
                     WHERE ID=${id}`
                , (err, row) => {
                    if (err)
                        console.error(err.message);
                    console.log(row);

                });

            readline.close();

        });





db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});


    });

});