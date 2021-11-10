init();

function init() {
    const http = new HTTP();
    const ui = new RENDEREL();
    http.get(ENVIRONMENT.USERS.getUsers)
    .then(response => response.data)
    .then(rdata => {
        rdata.forEach(element => {
            console.log(element.name)
            ui.createUser(element.name)
        });
    })
    .catch(error => console.log('ERROR', error))
}
