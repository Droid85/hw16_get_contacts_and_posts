init();

function init() {
    const http = new HTTP();
    http.get(ENVIRONMENT.USERS.getUsers)
    .then(response => console.log(response))
    .catch(error => console.log('ERROR', error))
}
