function getClienti() {
    fetch('http://localhost:3000/clienti')
    .then(response => response.json())
    .then(dati => {
        console.log(dati);
    })
}

getClienti();