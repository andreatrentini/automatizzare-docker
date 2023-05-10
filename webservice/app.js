const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

var service = express();

service.use(cors());

service.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

service.get('/clienti', (req, res) => {
    // 1. ottenere i dati dal database

    // 1.a creo la connessione con il server sql

    let parametriConnessioneDB = {
        host: 'sqlserver',
        user: 'root',
        password: 'cisco',
        database: 'gestione_clienti'
    };

    let istruzioneSQL = 'SELECT * FROM clienti';

    let connessione = mysql.createConnection(parametriConnessioneDB);

    // 1.b Eseguo la query sul database

    connessione.query(istruzioneSQL, (errore, dati) => {
        if (!errore) {
            // 2.a inviare i dati come risposta
            res.json(dati);
        }
        else {
            // 2.b oppure inviare l'errore ricevuto dal server
            res.status(500).send(errore);
        }
    })
})

var server = service.listen(3000, () => {
    console.log('Server in ascolto...');
})